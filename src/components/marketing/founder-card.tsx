import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FounderCard() {
    return (
        <Card className="flex flex-col h-full bg-background border-border">
            <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-20 w-20 rounded-xl">
                        <AvatarImage src="/press/musa-sulaiman.png" alt="Musa Sulaiman" className="object-cover" />
                        <AvatarFallback className="rounded-xl">MS</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-2xl font-heading">Musa Sulaiman</CardTitle>
                        <CardDescription className="text-base mt-1">Founder, Zipa</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                    Musa built Zipa from the ground up — a username-first crypto bank for Nigeria where people send money to @handles instead of wallet addresses. Naira wallet, bills, invoicing, and five Nigerian languages, all shipped solo with AI pair-engineering.
                </p>
                
                <div className="flex flex-wrap gap-2">
                    <Link href="https://x.com/0xSkamber" target="_blank" rel="noopener noreferrer">
                        <Badge variant="secondary" className="hover:bg-secondary/80 text-sm py-1">X (@0xSkamber)</Badge>
                    </Link>
                    <Link href="https://tiktok.com/@0xskamber" target="_blank" rel="noopener noreferrer">
                        <Badge variant="secondary" className="hover:bg-secondary/80 text-sm py-1">TikTok (@0xskamber)</Badge>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
