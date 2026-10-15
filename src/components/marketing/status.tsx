import Wrapper from "@/components/global/wrapper";

const LIVE = [
    "NGN account and deposits",
    "Withdraw to bank",
    "Airtime and data (MTN, Airtel, Glo)",
    "Electricity",
    "DStv and GOtv",
    "USDC buy and sell",
    "Send to @username",
];

const SOON = ["USDT", "SOL and Solana", "Gift cards", "Cards"];

const Status = () => (
    <section id="live" className="w-full py-16 lg:py-24 scroll-mt-24">
        <Wrapper>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-medium font-heading text-center">What is live</h2>
                <p className="text-base text-muted-foreground mt-3 text-center">We ship in public. This list changes as we go.</p>
                <div className="grid gap-4 md:grid-cols-2 mt-10">
                    <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
                        <p className="text-sm font-semibold text-primary">Live now</p>
                        <ul className="mt-4 space-y-2">
                            {LIVE.map((item) => (
                                <li key={item} className="flex items-center gap-2 text-foreground/90">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-foreground/10 p-6">
                        <p className="text-sm font-semibold text-muted-foreground">Coming soon</p>
                        <ul className="mt-4 space-y-2">
                            {SOON.map((item) => (
                                <li key={item} className="flex items-center gap-2 text-foreground/60">
                                    <span className="size-1.5 rounded-full bg-foreground/30" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
);

export default Status;
