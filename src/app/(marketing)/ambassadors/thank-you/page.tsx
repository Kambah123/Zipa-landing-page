import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Mail, Sparkles } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants";

export const metadata: Metadata = {
    title: "Application Received — Zipa Ambassador Program",
    description: "Thank you for applying to the Zipa Ambassador Program.",
    robots: { index: false, follow: false },
};

export default function AmbassadorsThankYouPage() {
    return <main className="w-full min-h-dvh pt-32 pb-20 flex items-center"><Wrapper className="max-w-xl mx-auto"><div className="text-center"><div className="mx-auto size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center"><CheckCircle2 className="size-8" /></div><h1 className="mt-6 text-4xl font-heading font-medium">Application received</h1><p className="mt-4 text-lg text-muted-foreground">Thanks for applying to the Zipa Ambassador Program.</p></div><div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6"><div className="flex gap-4"><Clock className="size-5 text-primary shrink-0" /><div><h2 className="font-medium">What happens next?</h2><p className="mt-1 text-sm text-muted-foreground leading-relaxed">Our team will review your application. Shortlisted candidates will be contacted within 7–14 days for a short interview or voice assessment.</p></div></div><div className="flex gap-4"><Sparkles className="size-5 text-primary shrink-0" /><div><h2 className="font-medium">Selection is based on fit</h2><p className="mt-1 text-sm text-muted-foreground leading-relaxed">We look at curiosity, reliability, communication, community fit, and integrity—not follower count alone.</p></div></div><div className="flex gap-4"><Mail className="size-5 text-primary shrink-0" /><div><h2 className="font-medium">Questions?</h2><p className="mt-1 text-sm text-muted-foreground leading-relaxed">Email the Zipa team if you need help with your application.</p></div></div></div><div className="mt-8 text-center"><Link href={Routes.Home}><Button variant="outline" className="rounded-full"><ArrowLeft className="size-4" /> Back to homepage</Button></Link></div></Wrapper></main>;
}
