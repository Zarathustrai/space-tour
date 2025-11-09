import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
        extend: {
            colors: {
                background: "#06080f",
                foreground: "#e6f1ff",
                muted: "#101624",
                card: "#0b1020",
                accent: "#8ab4ff"
            },
            fontFamily: {
                sans: ["Outfit", ...fontFamily.sans],
                mono: ["IBM Plex Mono", ...fontFamily.mono]
            },
            boxShadow: {
                soft: "0 10px 40px rgba(0,0,0,.45)",
                glow: "0 0 120px 40px rgba(138,180,255,.08)"
            },
            animation: {
                "flow-a": "flow 28s ease-in-out infinite",
                "flow-b": "flow 36s ease-in-out infinite reverse",
                float: "float 8s ease-in-out infinite"
            },
            keyframes: {
                flow: {
                    "0%": { transform: "translate3d(-10%, -10%, 0) scale(1)" },
                    "50%": { transform: "translate3d(10%, 10%, 0) scale(1.15)" },
                    "100%": { transform: "translate3d(-10%, -10%, 0) scale(1)" }
                },
                float: {
                    "0%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-6px)" },
                    "100%": { transform: "translateY(0)" }
                }
            }
        }
    },
    plugins: []
} satisfies Config;