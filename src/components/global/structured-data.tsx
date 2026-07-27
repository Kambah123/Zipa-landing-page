const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usezipa.xyz";

/**
 * JSON-LD structured data for rich search results. Rendered as a script tag in
 * the document so Google/Bing can parse Zipa as an Organization, a WebSite, and
 * a finance SoftwareApplication. Kept in sync with the marketing copy.
 */
const StructuredData = () => {
    const graph = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Zipa",
            url: SITE_URL,
            logo: `${SITE_URL}/icon.svg`,
            description:
                "Zipa is the username-first crypto bank for Nigeria — send, receive and grow SOL, ETH, USDT and more with just your @username.",
            sameAs: ["https://x.com/0xSkamber", "https://github.com/Kambah123"],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: "Zipa",
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Zipa",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web, iOS, Android",
            url: SITE_URL,
            image: `${SITE_URL}/images/og-image.png`,
            description:
                "Send money like a message. Zipa is a username-first, non-custodial crypto bank — pay anyone by @username across Solana and Ethereum, with NGN display and no gas jargon.",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
            },
            publisher: { "@id": `${SITE_URL}/#organization` },
        },
    ];

    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
};

export default StructuredData;
