import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "Difference",
        href: Routes.Difference,
    },
    {
        label: "How it works",
        href: Routes.Workflow,
    },
    {
        label: "Features",
        href: Routes.Capabilities,
    },
    {
        label: "Rails",
        href: Routes.Integrations,
    },
    {
        label: "Pricing",
        href: Routes.Membership,
    },
    {
        label: "FAQ",
        href: Routes.Faq,
    },
] as const;

export const footerLinks = {
    product: [
        { label: "Features", href: Routes.Capabilities },
        { label: "How it works", href: Routes.Workflow },
        { label: "Pricing", href: Routes.Membership },
        { label: "Merchant mode", href: Routes.Capabilities }
    ],
    resources: [
        { label: "Support", href: "https://x.com/0xSkamber" },
        { label: "Beta FAQ", href: Routes.Faq },
        { label: "Roadmap", href: "#" },
        { label: "Status", href: "#" }
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "mailto:musa@usezipa.xyz" }
    ],
    legal: [
        { label: "Terms of Service", href: "https://app.usezipa.xyz/terms" },
        { label: "Privacy Policy", href: "https://app.usezipa.xyz/privacy" }
    ]
};

export const socialLinks = [
    { label: "X", href: "https://x.com/0xSkamber", icon: "x" }
];
