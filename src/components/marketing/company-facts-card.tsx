import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompanyFactsCard() {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.usezipa.xyz";

    return (
        <Card className="flex flex-col h-full bg-background border-border">
            <CardHeader>
                <CardTitle className="text-2xl font-heading">Company Facts</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div className="space-y-1.5">
                        <p className="text-sm text-muted-foreground">Legal Entity</p>
                        <p className="font-medium text-foreground">OneDev Studioo</p>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-sm text-muted-foreground">Registration</p>
                        <p className="font-medium text-foreground">CAC BN 9704508</p>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-sm text-muted-foreground">Launch Market</p>
                        <p className="font-medium text-foreground">Nigeria</p>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-sm text-muted-foreground">Product Link</p>
                        <Link href={appUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                            Use Zipa &rarr;
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
