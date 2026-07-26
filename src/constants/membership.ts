export const pricingPlans = [
    {
        id: 1,
        name: "Personal",
        price: {
            monthly: 0,
            yearly: 0
        },
        description: "Everything you need to send, receive and grow as an individual.",
        features: [
            { text: "@username identity", highlighted: false },
            { text: "On-chain sends (SOL, ETH, Base)", highlighted: false },
            { text: "Instant Zipa ledger transfers", highlighted: false },
            { text: "QR pay + public pay link", highlighted: false },
            { text: "AI transaction insights", highlighted: false },
            { text: "NGN portfolio display", highlighted: false }
        ],
        cta: {
            text: "Claim @username",
            href: "#"
        },
        popular: false,
        badge: undefined as string | undefined,
        yearlyDiscount: undefined as string | undefined
    },
    {
        id: 2,
        name: "Merchant",
        price: {
            monthly: 0,
            yearly: 0
        },
        description: "Built for sellers, vendors and creators who get paid on the regular.",
        features: [
            { text: "Business handle", highlighted: true },
            { text: "Storefront QR (printable)", highlighted: true },
            { text: "Public pay page (zipa.com/pay/@you)", highlighted: true },
            { text: "Payment notifications", highlighted: true },
            { text: "All Personal features included", highlighted: true },
            { text: "Free during beta", highlighted: true }
        ],
        cta: {
            text: "Open Merchant Account",
            href: "#"
        },
        popular: true,
        badge: "FREE BETA",
        yearlyDiscount: "free during beta"
    }
];

export const trustedCompanies = {
    title: "Coming soon: Business",
    description: "Team accounts, bulk payouts, API access and integrations for growing businesses.",
    cta: {
        text: "Get notified",
        href: "#"
    }
};

export const PRICING_FOOTNOTE = "Zipa is in beta on test networks — everything is free to try today.";
