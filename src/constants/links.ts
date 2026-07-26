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
        { label: "Beta FAQ", href: "#" },
        { label: "Roadmap", href: "#" },
        { label: "Status", href: "#" }
    ],
    company: [
        { label: "About", href: "#" },
        { label: "GitHub", href: "https://github.com/Kambah123" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
    ]
};

export const socialLinks = [
    { label: "X", href: "https://x.com/0xSkamber", icon: "x" },
    { label: "GitHub", href: "https://github.com/Kambah123", icon: "github" }
];
