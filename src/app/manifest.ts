import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Zipa — Crypto banking, made simple",
        short_name: "Zipa",
        description:
            "The username-first crypto bank for Nigeria. Send, receive and grow — SOL, ETH, USDT and more — with just your @username.",
        start_url: "/",
        display: "standalone",
        background_color: "#08090A",
        theme_color: "#08090A",
        categories: ["finance", "productivity"],
        icons: [
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
                purpose: "any",
            },
        ],
    };
}
