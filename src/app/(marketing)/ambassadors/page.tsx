import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import AmbassadorForm from "@/components/marketing/ambassador-form";

export const metadata: Metadata = {
    title: "Zipa Ambassador Program",
    description: "Help your community discover simpler digital payments and grow with Zipa.",
};

const tracks = [
    { title: "Community", description: "Build conversations, answer questions, and help people understand Zipa." },
    { title: "Content", description: "Create useful posts, explainers, demos, and stories around Zipa." },
    { title: "Growth & Merchant", description: "Introduce Zipa to users and merchants who can benefit from simpler payments." },
];

const benefits = [
    "Direct access to the Zipa team and product feedback loop",
    "Early product access, training, and ambassador resources",
    "Recognition for meaningful community contributions",
    "A clear referral and activity framework for the cohort",
];

const steps = [
    ["1", "Apply", "Tell us about yourself, your community, and how you would contribute."],
    ["2", "Review", "Every application is reviewed using the same scorecard."],
    ["3", "Shortlist", "Selected candidates move to a short interview or voice assessment."],
    ["4", "Trial", "Shortlisted candidates complete a small practical task."],
    ["5", "Selection", "15–20 ambassadors are selected, with reserves kept for the cohort."],
    ["6", "Onboarding", "Selected ambassadors receive training, expectations, and their referral setup."],
];

export default function AmbassadorsPage() {
    return (
        <main className="w-full min-h-dvh pt-28 pb-24">
            <Wrapper>
                <section className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                        <Users className="size-4 text-primary" /> Zipa Ambassador Program
                    </div>
                    <h1 className="mt-7 text-4xl md:text-6xl font-heading font-medium tracking-tight text-foreground">
                        Help build the future of simpler payments.
                    </h1>
                    <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Join a small, community-first cohort helping people discover Zipa, share honest product feedback, and grow with us.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                        <Link href="#apply"><Button className="rounded-full px-6">Apply now <ArrowRight className="size-4" /></Button></Link>
                        <Link href="#program"><Button variant="outline" className="rounded-full px-6">See the program</Button></Link>
                    </div>
                </section>

                <section id="program" className="mt-24">
                    <div className="grid md:grid-cols-3 gap-5">
                        {tracks.map((track) => (
                            <div key={track.title} className="rounded-2xl border border-border bg-card p-6">
                                <Sparkles className="size-5 text-primary" />
                                <h2 className="mt-4 text-xl font-medium">{track.title} Ambassador</h2>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{track.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-20 grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-heading font-medium">What you get</h2>
                        <div className="mt-6 space-y-4">
                            {benefits.map((benefit) => <div key={benefit} className="flex gap-3"><CheckCircle2 className="size-5 text-primary shrink-0" /><p className="text-muted-foreground">{benefit}</p></div>)}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="rounded-2xl border border-border bg-card p-6 flex gap-4"><Clock className="size-5 text-primary shrink-0" /><div><h3 className="font-medium">About 3 hours per week</h3><p className="text-sm text-muted-foreground mt-1">An 8-week program with flexible scheduling, weekly check-ins, and optional office hours.</p></div></div>
                        <div className="rounded-2xl border border-border bg-card p-6 flex gap-4"><MapPin className="size-5 text-primary shrink-0" /><div><h3 className="font-medium">Remote-first, Nigeria-focused</h3><p className="text-sm text-muted-foreground mt-1">Most work happens online. Local community meetups are encouraged, not required.</p></div></div>
                    </div>
                </section>

                <section className="mt-20 rounded-2xl border border-border bg-card p-6 md:p-8 flex gap-4">
                    <ShieldCheck className="size-6 text-primary shrink-0" />
                    <div><h2 className="font-medium">Keep it honest</h2><p className="mt-2 text-sm text-muted-foreground leading-relaxed">Zipa is in early access/testnet. Ambassadors must not promise real-money availability, guaranteed returns, token listings, or specific rewards. Financial or regulatory questions should be directed to the Zipa team.</p></div>
                </section>

                <section className="mt-24">
                    <div className="text-center max-w-2xl mx-auto"><h2 className="text-3xl font-heading font-medium">A simple selection process</h2><p className="mt-3 text-muted-foreground">We care about curiosity, reliability, communication, and integrity—not follower count alone.</p></div>
                    <div className="mt-10 max-w-3xl mx-auto grid gap-5">
                        {steps.map(([number, title, description]) => <div key={number} className="flex gap-4 items-start"><div className="size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium shrink-0">{number}</div><div><h3 className="font-medium">{title}</h3><p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p></div></div>)}
                    </div>
                </section>

                <section id="apply" className="mt-24 max-w-3xl mx-auto">
                    <div className="text-center mb-10"><h2 className="text-3xl font-heading font-medium">Apply to become an ambassador</h2><p className="mt-3 text-muted-foreground">Fill out the form below. We review every application and contact shortlisted candidates.</p></div>
                    <AmbassadorForm />
                </section>
            </Wrapper>
        </main>
    );
}
