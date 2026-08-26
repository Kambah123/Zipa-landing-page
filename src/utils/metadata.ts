import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usezipa.xyz";

const DEFAULT_TITLE = "Zipa - Crypto banking, made simple";
const DEFAULT_DESCRIPTION =
    "The username-first crypto bank for Nigeria. Send, receive and grow - SOL, ETH, USDT and more - with just your @username. No wallet addresses, no gas jargon.";

const KEYWORDS = [
    "Zipa",
    "crypto bank",
    "crypto bank Nigeria",
    "send crypto by username",
    "username crypto wallet",
    "non-custodial wallet",
    "USDT wallet Nigeria",
    "send money like a message",
    "Solana wallet",
    "Ethereum wallet",
    "SOL ETH USDT",
    "crypto payments Nigeria",
    "crypto banking Africa",
    "naira crypto app",
    "receive crypto Nigeria",
];

export const generateMetadata = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    image = "/images/og-image.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icons/icon.svg",
        },
        {
            rel: "icon",
            sizes: "any",
            url: "/icon.svg",
        },
    ],
    noIndex = false,
    path = "/",
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    path?: string;
} = {}): Metadata => ({
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "Zipa",
    keywords: KEYWORDS,
    authors: [{ name: "Zipa", url: SITE_URL }],
    creator: "Zipa",
    publisher: "Zipa",
    category: "finance",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
        canonical: path,
    },
    icons,
    manifest: "/manifest.webmanifest",
    openGraph: {
        title,
        description,
        siteName: "Zipa",
        type: "website",
        locale: "en_US",
        url: path,
        ...(image
            ? {
                  images: [
                      {
                          url: image,
                          width: 1200,
                          height: 630,
                          alt: "Zipa - Send money like a message",
                      },
                  ],
              }
            : {}),
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@0xSkamber",
        creator: "@0xSkamber",
        ...(image ? { images: [image] } : {}),
    },
    robots: noIndex
        ? { index: false, follow: false }
        : {
              index: true,
              follow: true,
              googleBot: {
                  index: true,
                  follow: true,
                  "max-image-preview": "large",
                  "max-snippet": -1,
                  "max-video-preview": -1,
              },
          },
});
