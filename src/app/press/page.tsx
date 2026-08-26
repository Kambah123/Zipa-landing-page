import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import FounderCard from "@/components/marketing/founder-card";
import CompanyFactsCard from "@/components/marketing/company-facts-card";

export const metadata: Metadata = {
    title: "Press & founder - Zipa",
    description: "Press mentions and founder information for Zipa.",
};

const PRESS_MENTIONS: { outlet: string; title: string; url: string; date: string }[] = [];

export default function PressPage() {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.usezipa.xyz";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Musa Sulaiman",
        worksFor: {
            "@type": "Organization",
            name: "Zipa",
            legalName: "OneDev Studioo",
        },
        sameAs: [
            "https://x.com/0xSkamber",
            "https://tiktok.com/@0xskamber"
        ]
    };

    return (
        <main className="w-full relative min-h-dvh">
            <Navbar />
            
            <div className="pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Press & Founder</h1>
                    <p className="text-muted-foreground text-lg">
                        About the people and company behind Zipa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Founder Card */}
                    <FounderCard />

                    {/* Company Facts Card */}
                    <CompanyFactsCard />
                </div>

                {/* Press Mentions Card */}
                <Card className="bg-background border-border">
                    <CardHeader>
                        <CardTitle className="text-2xl font-heading">Press Mentions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {PRESS_MENTIONS.length === 0 ? (
                            <p className="text-muted-foreground italic py-4">
                                Coverage will show up here as it&apos;s published.
                            </p>
                        ) : (
                            <ul className="space-y-4">
                                {PRESS_MENTIONS.map((mention, idx) => (
                                    <li key={idx}>
                                        <Link href={mention.url} target="_blank" rel="noopener noreferrer" className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <h3 className="font-semibold text-foreground">{mention.title}</h3>
                                                <span className="text-sm text-muted-foreground">{mention.date}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{mention.outlet}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </div>

            <Footer />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
