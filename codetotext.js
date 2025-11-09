const fs = require("fs").promises;
const path = require("path");
const fg = require("fast-glob");

const ROOT_DIRECTORY = ".";
const OUTPUT_FILE = "codebase_content.txt";

// Patterns for files/dirs to IGNORE when reading CONTENT.
// This is the comprehensive list.
const CONTENT_IGNORE_PATTERNS = [
  "**/node_modules/**",
  "**/dist/**",
  "**/.git/**",
  "**/.vscode/**",
  "**/.next/**",
  "**/.idea/**",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/*.log",
  "codetotext.js",
  "**/codebase_content.txt",
  "**/*.svg",
  "**/*.png",
];

// A more limited set of patterns to IGNORE for the DIRECTORY TREE.
// We want to see folders like 'public' and filenames like 'image.png' in the tree,
// so we only ignore the large, irrelevant directories here.
const TREE_IGNORE_PATTERNS = [
  "**/node_modules/**",
  "**/dist/**",
  "**/.git/**",
  "**/.vscode/**",
  "**/.next/**",
  "**/.idea/**",
  "codetotext.js",
  "**/codebase_content.txt",
];

// We only read the content of files with these extensions.
const INCLUDE_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".html",
  ".css",
    ".store",
];

/**
 * Generates a string representation of the directory tree.
 * @param {string} root - The root directory to start the tree from.
 * @param {string[]} ignorePatterns - Patterns to ignore for the tree structure.
 * @returns {Promise<string>} - A string representing the formatted directory tree.
 */
async function generateDirectoryTree(root, ignorePatterns) {
  console.log("Generating directory tree...");
  const entries = await fg(["**/*"], {
    cwd: root,
    ignore: ignorePatterns,
    dot: true,
  });

  if (entries.length === 0) {
    return "No files or directories found to create a tree.";
  }

  const treeRoot = {};
  for (const entryPath of entries) {
    const parts = entryPath.split(path.sep);
    let currentNode = treeRoot;
    for (const part of parts) {
      if (!currentNode[part]) {
        currentNode[part] = {};
      }
      currentNode = currentNode[part];
    }
  }

  function formatTree(node, prefix = "") {
    let result = "";
    const keys = Object.keys(node).sort();
    keys.forEach((key, index) => {
      const isLast = index === keys.length - 1;
      const connector = isLast ? "└── " : "├── ";
      result += `${prefix}${connector}${key}\n`;

      if (Object.keys(node[key]).length > 0) {
        const newPrefix = prefix + (isLast ? "    " : "│   ");
        result += formatTree(node[key], newPrefix);
      }
    });
    return result;
  }

  const rootName = path.basename(path.resolve(root));
  return `${rootName}\n${formatTree(treeRoot)}`;
}

async function codebaseToText() {
  console.log(`Scanning directory: ${path.resolve(ROOT_DIRECTORY)}`);
  console.log(`Ignoring patterns for content: ${CONTENT_IGNORE_PATTERNS.join(", ")}`);
  console.log(`Including extensions for content: ${INCLUDE_EXTENSIONS.join(", ")}`);

  try {
    // 1. Generate the directory tree using its specific, more limited ignore list
    const directoryTree = await generateDirectoryTree(ROOT_DIRECTORY, TREE_IGNORE_PATTERNS);

    // 2. Find all files to include content from, using the comprehensive ignore list
    const files = await fg(
        INCLUDE_EXTENSIONS.length > 0
            ? INCLUDE_EXTENSIONS.map((ext) => `**/*${ext}`)
            : ["**/*"],
        {
          cwd: ROOT_DIRECTORY,
          ignore: CONTENT_IGNORE_PATTERNS,
          dot: true,
          onlyFiles: true,
          absolute: true,
        },
    );

    if (files.length === 0) {
      console.log("No files found matching the content criteria.");
    } else {
      console.log(`Found ${files.length} files to process for content.`);
    }

    // 3. Construct the full content string, starting with the tree
    let fullContent = `Codebase from: ${path.resolve(ROOT_DIRECTORY)}\n`;
    fullContent += `Generated on: ${new Date().toISOString()}\n\n`;

    fullContent += "========================================\n";
    fullContent += " Directory Tree\n";
    fullContent += "========================================\n\n";
    fullContent += directoryTree;
    fullContent += "\n\n========================================\n\n";

    for (const filePath of files) {
      const relativeFilePath = path.relative(ROOT_DIRECTORY, filePath);
      console.log(`Processing content: ${relativeFilePath}`);
      try {
        const content = await fs.readFile(filePath, "utf8");
        fullContent += `--- File: ${relativeFilePath} ---\n`;
        fullContent += content;
        fullContent += `\n\n--- End of File: ${relativeFilePath} ---\n\n`;
        fullContent += "========================================\n\n";
      } catch (readError) {
        console.warn(
            `Could not read file content (might be binary or inaccessible): ${relativeFilePath} - ${readError.message}`,
        );
        fullContent += `--- File: ${relativeFilePath} (Could not be read: ${readError.message}) ---\n\n`;
        fullContent += "========================================\n\n";
      }
    }

    // Append your project description at the very end
    fullContent +=
        "\nWe are going to be building a visitation card website for Space Tour Ltd from scratch. Nextjs + Shadcn, space themed" +
        "\n" +
        "Space Tour LTD - Complete Website Structure & Content\n" +
        "Part 1: Refined Sitemap\n" +
        "Space Tour LTD Website\n" +
        "│\n" +
        "├── Home\n" +
        "│\n" +
        "├── Logistics Services\n" +
        "│   ├── Sea Freight (optional sub-page)\n" +
        "│   ├── Air Freight (optional sub-page)\n" +
        "│   └── Land Transport (optional sub-page)\n" +
        "│\n" +
        "├── Product Sourcing\n" +
        "│   ├── Electronics & Components (optional sub-page)\n" +
        "│   ├── Home & Lifestyle (optional sub-page)\n" +
        "│   ├── Textiles & Apparel (optional sub-page)\n" +
        "│   └── Specialty Products (optional sub-page)\n" +
        "│\n" +
        "├── About Us\n" +
        "│\n" +
        "└── Contact / Get a Quote\n" +
        "\n" +
        "Part 2: Detailed Page Content\n" +
        "1. HOMEPAGE\n" +
        "Meta Title: Space Tour LTD | Global Sourcing & International Logistics Partner\n" +
        "Meta Description: Your single partner for end-to-end supply chain solutions. From product sourcing worldwide to seamless logistics—we simplify international trade for B2B businesses.\n" +
        "\n" +
        "H1: Your Single Partner for Global Sourcing and Seamless Logistics\n" +
        "Hero Section:\n" +
        "Sub-headline: We handle the entire cycle—from finding the right products worldwide to delivering them to your door—simplifying your supply chain and driving your growth.\n" +
        "Primary CTA: [Optimize Your Supply Chain Today]\n" +
        "\n" +
        "Company Summary Block\n" +
        "Space Tour LTD is a multitrading and international logistics company dedicated to simplifying global commerce for B2B businesses. We combine comprehensive procurement capabilities with full-service logistics management, eliminating the complexity of working with multiple vendors. Our integrated approach means you gain a strategic partner who understands both product sourcing and the intricacies of international shipping—delivering efficiency, reliability, and peace of mind at every stage.\n" +
        "\n" +
        "USP & Key Benefits Section\n" +
        "Why Partner with Space Tour LTD?\n" +
        "End-to-End Supply Chain Management One partner handles everything—from initial product sourcing and quality verification to freight forwarding, customs clearance, and final delivery. No coordination headaches, no gaps in accountability.\n" +
        "Global Reach with Local Expertise Access our extensive network of vetted suppliers across multiple continents, combined with deep knowledge of international regulations, customs procedures, and shipping routes to ensure smooth operations wherever you do business.\n" +
        "Risk Reduction & Quality Assurance We take ownership of compliance, documentation, and quality control at every step. Your reputation is protected through rigorous supplier vetting, pre-shipment inspections, and proactive regulatory management.\n" +
        "Cost & Time Efficiency Consolidated operations mean better rates, faster turnaround, and reduced internal resource demands. We leverage our volume and relationships to deliver savings you can't achieve independently, while our streamlined processes accelerate time-to-market.\n" +
        "\n" +
        "Stats & Key Figures Section\n" +
        "Space Tour LTD by the Numbers\n" +
        "12+ Years in International Trade & Logistics\n" +
        "35+ Countries in Our Sourcing Network\n" +
        "2,500+ Containers Shipped Annually\n" +
        "94% Client Retention Rate Year Over Year\n" +
        "\n" +
        "Page Teaser Section\n" +
        "Comprehensive Logistics Services From sea and air freight to customs brokerage and warehousing, our logistics solutions ensure your products move efficiently across borders and arrive on time. We provide complete supply chain visibility and handle every regulatory requirement. [Explore Our Logistics Services →]\n" +
        "Strategic Product Sourcing Gain access to a vast portfolio spanning electronics, home goods, textiles, furniture, specialty consumables, and more. Our procurement experts identify reliable suppliers, negotiate favorable terms, and ensure quality standards are met before products ship. [Discover Our Sourcing Capabilities →]\n" +
        "\n" +
        "2. LOGISTICS SERVICES PAGE\n" +
        "Meta Title: International Logistics Services | Freight Forwarding & Customs Brokerage\n" +
        "Meta Description: Comprehensive logistics solutions for B2B businesses. Expert freight forwarding, customs clearance, warehousing, and supply chain management for seamless international operations.\n" +
        "\n" +
        "H1: Comprehensive International Logistics Solutions\n" +
        "Introduction Paragraph:\n" +
        "Navigating international logistics requires expertise, infrastructure, and constant attention to detail. Space Tour LTD provides end-to-end logistics management that removes complexity from your operations. Whether you're shipping a single pallet or managing regular container volumes, our experienced team ensures your goods move efficiently, comply with all regulations, and arrive on schedule. We become an extension of your business—handling the logistics so you can focus on growth.\n" +
        "\n" +
        "H2: Shipping & Freight Management\n" +
        "Our multimodal freight solutions give you flexibility and reliability across all transport methods. We manage sea freight for cost-effective bulk shipments, air freight for time-sensitive cargo, and land transport for regional distribution. With established carrier relationships and route optimization expertise, we secure competitive rates and consistent capacity even during peak seasons. Every shipment is monitored from departure to destination, with proactive communication ensuring you're always informed. Our team evaluates your specific requirements—considering factors like cargo type, urgency, and budget—to recommend the most efficient shipping solution.\n" +
        "\n" +
        "H2: Customs Clearance & Documentation\n" +
        "Customs compliance can make or break international shipments. Our brokerage specialists navigate complex regulatory requirements across multiple jurisdictions, ensuring accurate classification, proper valuation, and complete documentation. We manage tariff optimization, duty drawback programs, and regulatory filings, minimizing delays and avoiding costly penalties. From commercial invoices and certificates of origin to specialized permits for restricted goods, we handle every detail. Our proactive approach includes staying current with changing trade regulations, so your business remains compliant as rules evolve.\n" +
        "\n" +
        "H2: Warehousing & Inventory Management\n" +
        "Strategic warehousing is essential for supply chain efficiency. Our facilities provide secure storage with flexible terms—whether you need short-term cross-docking or long-term inventory holding. We offer value-added services including quality inspections, repackaging, labeling, and kitting to prepare your products for market. Real-time inventory visibility through our management systems allows you to make informed decisions about stock levels and distribution. For businesses managing seasonal fluctuations or testing new markets, our scalable warehousing solutions provide the agility you need without capital investment in your own facilities.\n" +
        "\n" +
        "H2: Supply Chain Visibility & Tracking\n" +
        "Uncertainty is the enemy of effective planning. We provide complete transparency throughout the logistics cycle with real-time tracking and regular status updates. From the moment goods leave the supplier until they reach your designated location, you have visibility into shipment progress, potential delays, and estimated arrival times. Our technology integrations and communication protocols keep all stakeholders informed—enabling you to coordinate with customers, manage inventory planning, and respond quickly to any exceptions. This visibility transforms logistics from a black box into a strategic advantage.\n" +
        "\n" +
        "The Space Tour Logistics Process\n" +
        "Step 1: Consultation & Planning We assess your requirements, analyze routes, and design an optimal logistics strategy.\n" +
        "Step 2: Documentation & Compliance Our team prepares all necessary paperwork and ensures regulatory compliance.\n" +
        "Step 3: Freight Booking & Dispatch We secure capacity with trusted carriers and coordinate pickup from origin.\n" +
        "Step 4: In-Transit Management Continuous monitoring with proactive communication about shipment status.\n" +
        "Step 5: Customs Clearance Expert brokerage ensures smooth clearance through all jurisdictions.\n" +
        "Step 6: Final Delivery Goods are delivered to your warehouse, store, or designated location.\n" +
        "Step 7: Post-Delivery Support We provide documentation, handle any claims, and analyze performance for continuous improvement.\n" +
        "\n" +
        "Strong CTA Section:\n" +
        "Ready to streamline your international logistics? Our team will design a customized solution that reduces costs, accelerates delivery times, and eliminates supply chain headaches.\n" +
        "[Get a Custom Logistics Quote]\n" +
        "\n" +
        "3. PRODUCT SOURCING PAGE\n" +
        "Meta Title: Global Product Sourcing Services | B2B Procurement & Supplier Management\n" +
        "Meta Description: Expert product sourcing for B2B businesses. Access vetted suppliers worldwide across electronics, home goods, textiles, and more. Quality-assured procurement with end-to-end management.\n" +
        "\n" +
        "H1: Global Product Sourcing for Your Business\n" +
        "Introduction Paragraph:\n" +
        "Finding reliable suppliers who deliver quality products at competitive prices is challenging—especially when sourcing internationally. Space Tour LTD removes this burden by leveraging our extensive global network and procurement expertise to source exactly what your business needs. We don't just connect you with suppliers; we manage the entire sourcing process including negotiation, quality verification, and compliance checking. Whether you're launching a new product line, diversifying your offerings, or seeking better terms with current categories, our sourcing capabilities give you access to opportunities that would take years to develop independently.\n" +
        "\n" +
        "H2: Our Sourcing Process\n" +
        "Discovery & Requirements Analysis We begin by understanding your specific needs—product specifications, quality standards, target pricing, volume requirements, and timeline. This detailed briefing ensures we're searching for suppliers who can truly meet your business objectives.\n" +
        "Supplier Identification & Vetting Drawing from our network across 35+ countries, we identify potential suppliers with relevant capabilities. Each candidate undergoes rigorous evaluation including facility assessments, financial stability checks, certification verification, and reference validation.\n" +
        "Negotiation & Terms We leverage our purchasing volume and market knowledge to negotiate favorable pricing, payment terms, and production schedules. Our established relationships often unlock better terms than individual buyers can secure.\n" +
        "Quality Control & Compliance Before any product ships, we conduct thorough inspections against your specifications. We verify certifications, test functionality where applicable, and ensure compliance with destination market regulations—protecting your brand and reducing return risks.\n" +
        "Ongoing Relationship Management Sourcing doesn't end with the first order. We maintain supplier relationships, monitor performance metrics, and continuously optimize for quality and value as your partnership evolves.\n" +
        "\n" +
        "H2: Product Categories We Source\n" +
        "Electronics & Components Consumer electronics, computer accessories, mobile devices, smart home technology, electronic components, and related peripheral equipment for retail and distribution.\n" +
        "Home Appliances Kitchen appliances, cleaning equipment, climate control devices, small household electronics, and personal care appliances meeting international safety standards.\n" +
        "Home & Lifestyle Goods Kitchenware, storage solutions, home organization products, decorative accessories, bedding, bath products, and everyday household essentials.\n" +
        "Clothing & Textiles Apparel across all categories, fashion accessories, workwear, promotional clothing, home textiles, and fabric products with flexible MOQs and customization options.\n" +
        "Tools & Hobby Goods Hand tools, power tools, DIY equipment, craft supplies, modeling materials, outdoor equipment, and specialized hobby products for enthusiast markets.\n" +
        "Furniture & Home Decor Residential and commercial furniture, decorative items, wall art, lighting fixtures, outdoor furniture, and interior design accessories in various styles and price points.\n" +
        "Specialty Consumables Premium coffee, exotic spices, specialty food items, and consumable goods with complex sourcing or importation requirements, properly packaged for international transport.\n" +
        "Gaming & Entertainment Video game accessories, board games, toys, collectibles, entertainment electronics, and recreational products appealing to diverse age groups.\n" +
        "Marketplace Goods for Resale Trending products, seasonal items, and general merchandise suitable for e-commerce platforms, retail stores, and distribution networks seeking product diversity.\n" +
        "\n" +
        "H2: Quality Control & Assurance\n" +
        "Quality failures damage your reputation and create costly returns. Our quality assurance program protects your business through multiple checkpoints. We conduct pre-production approvals to confirm samples match specifications before full manufacturing begins. During production runs, we perform in-process inspections to catch issues early. Pre-shipment inspections verify finished goods meet all requirements before they leave the factory. Every product category has specific inspection criteria based on industry standards and your requirements—from functionality testing of electronics to dimensional accuracy in furniture to fabric quality in textiles. We document all inspections with detailed reports including photographs, measurements, and test results, giving you complete confidence in what you're receiving. For regulated products, we verify proper certifications, safety compliance, and required markings before shipment.\n" +
        "\n" +
        "Strong CTA Section:\n" +
        "Ready to expand your product offerings or improve your sourcing strategy? Our procurement experts will help you access quality products from vetted global suppliers—backed by rigorous quality control and seamless logistics integration.\n" +
        "[Discuss Your Sourcing Needs]\n" +
        "\n" +
        "4. ABOUT US PAGE\n" +
        "Meta Title: About Space Tour LTD | Your Global Trade & Logistics Partner\n" +
        "Meta Description: Learn about Space Tour LTD's mission to simplify international commerce through integrated sourcing and logistics solutions for B2B businesses worldwide.\n" +
        "\n" +
        "H1: About Space Tour LTD\n" +
        "Our Story\n" +
        "Space Tour LTD was founded on a simple observation: businesses waste enormous resources coordinating between separate sourcing agents and logistics providers, creating inefficiencies, communication gaps, and increased risk. We set out to change that by building an integrated multitrading and logistics company where procurement expertise and supply chain management work seamlessly together.\n" +
        "Over more than a decade, we've developed deep relationships with manufacturers and suppliers across 35+ countries while building robust logistics capabilities spanning all transport modes. This integrated approach has helped hundreds of B2B businesses simplify their supply chains, reduce costs, and focus on their core competencies rather than operational complexity.\n" +
        "Our Mission\n" +
        "We exist to remove barriers from international trade. By serving as a single, accountable partner for both product sourcing and logistics management, we enable businesses of all sizes to compete globally—accessing the same supply chain advantages previously available only to major corporations with dedicated international operations teams.\n" +
        "Our Values\n" +
        "Reliability: We do what we promise, when we promise it. Your business depends on consistency, and we deliver it.\n" +
        "Transparency: You receive honest communication about capabilities, timelines, and challenges. No surprises, no excuses.\n" +
        "Partnership: Your success is our success. We invest in understanding your business and provide strategic advice beyond transactional service.\n" +
        "Continuous Improvement: We constantly refine processes, expand capabilities, and adopt new technologies to serve you better.\n" +
        "Our Team\n" +
        "Space Tour LTD brings together procurement specialists, logistics professionals, customs brokers, and supply chain strategists with decades of combined international trade experience. Our team members have lived and worked across multiple continents, bringing cultural understanding and local market knowledge that enriches every client relationship. We speak your language—literally and figuratively—whether you're a growing e-commerce business, an established wholesaler, or a brand exploring new product categories.\n" +
        "\n" +
        "5. CONTACT / GET A QUOTE PAGE\n" +
        "Meta Title: Contact Space Tour LTD | Get Your Custom Supply Chain Quote\n" +
        "Meta Description: Ready to optimize your international sourcing and logistics? Contact Space Tour LTD for a custom quote tailored to your business requirements.\n" +
        "\n" +
        "H1: Let's Optimize Your Supply Chain\n" +
        "Introduction Paragraph:\n" +
        "Whether you're exploring new sourcing opportunities, facing logistics challenges, or ready to consolidate your supply chain under one strategic partner, we're here to help. Share your requirements with us, and our team will develop a customized solution that addresses your specific needs.\n" +
        "\n" +
        "What Happens Next?\n" +
        "Initial Consultation: We'll schedule a conversation to understand your business, current challenges, and objectives.\n" +
        "Solution Design: Our team analyzes your requirements and develops a tailored approach combining sourcing and logistics as needed.\n" +
        "Detailed Proposal: You receive a comprehensive quote with transparent pricing, timelines, and service specifications.\n" +
        "Partnership Launch: Once approved, we immediately begin executing your program with dedicated account management.\n" +
        "\n" +
        "Contact Form Fields:\n" +
        "Full Name *\n" +
        "Company Name *\n" +
        "Email Address *\n" +
        "Phone Number\n" +
        "Industry/Business Type\n" +
        "I'm interested in: [Dropdown: Logistics Services / Product Sourcing / Both / General Inquiry]\n" +
        "Tell us about your requirements *\n" +
        "Estimated monthly volume (if applicable)\n" +
        "[Submit Inquiry]\n" +
        "\n" +
        "Alternative Contact Methods:\n" +
        "Email: hello@spacetour.tech  Phone: [Company Phone Number] Office Hours: Monday - Friday, 9:00 AM - 6:00 PM [Timezone]\n" +
        "\n" +
        "Address: Space Tour LTD [Physical Address] [City, Country, Postal Code]\n" +
        "\n"+
        "EXTRA INSTRUCTIONS TO FOLLOW:\n" +
        "Keep comments in-code to a minimum, unless they help you think as well.\n" +
        "When you're editing a function, provide the code for the FULL function, not just fragments\n" +
        "Always provide suggested next steps if we're finished with a part of a project \n" +
        "Important: if you see how something could be improved from the code, please suggest it.\n" +
        "I'm working in an IDE so please make it as easy as possible for me to copy paste into files." +
        "\n\n" +
        "Below we will be working on implementing this project fully.\n\n" +
        "My Request:\n"

    // 4. Write to the output file
    await fs.writeFile(path.join(ROOT_DIRECTORY, OUTPUT_FILE), fullContent);
    console.log(
        `\nSuccessfully written codebase to ${path.join(ROOT_DIRECTORY, OUTPUT_FILE)}`,
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

codebaseToText();