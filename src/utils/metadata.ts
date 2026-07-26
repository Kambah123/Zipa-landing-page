import { Metadata } from "next";

export const generateMetadata = ({
    title = "Zipa — Crypto banking, made simple",
    description = "The username-first crypto bank for Nigeria. Send, receive and grow — SOL, ETH, USDT and more — with just your @username.",
    image = "/images/og-image.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
        {
            rel: "icon",
            sizes: "any",
            url: "/icon.svg"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        siteName: "Zipa",
        type: "website",
        ...(image ? { images: [image] } : {}),
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@0xSkamber",
        ...(image ? { images: [image] } : {}),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
});
