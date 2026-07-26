"use client";

import React from 'react';
import { cn } from '@/utils';
import Container from '../global/container';
import Wrapper from '../global/wrapper';

const RAILS = [
    { name: 'Solana', monogram: 'SOL' },
    { name: 'Ethereum', monogram: 'ETH' },
    { name: 'Base', monogram: 'BASE' },
    { name: 'Privy', monogram: 'PRV' },
    { name: 'Supabase', monogram: 'SB' },
    { name: 'Helius', monogram: 'HEL' },
];

const Socials = () => {
    return (
        <section className="w-full py-12">
            <Wrapper>
                <Container animation="fadeUp" className="text-center">
                    <p className="text-sm text-transparent font-heading font-medium bg-clip-text bg-linear-to-r from-white/10 via-white/70 to-white/10 uppercase tracking-wider">
                        Built on real rails
                    </p>
                </Container>

                <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto mt-8">
                    {RAILS.map((rail) => (
                        <div
                            key={rail.name}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-lg",
                                "border border-foreground/10 bg-foreground/5",
                                "hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                            )}
                        >
                            <span className="text-xs font-mono font-bold text-primary/70 tracking-widest">
                                {rail.monogram}
                            </span>
                            <span className="text-sm text-muted-foreground font-medium">
                                {rail.name}
                            </span>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Socials;
