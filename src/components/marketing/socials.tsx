"use client";

import React from 'react';
import { cn } from '@/utils';
import Container from '../global/container';
import Wrapper from '../global/wrapper';

// The real infrastructure Zipa runs on — shown as their own brand marks.
const RAILS = [
    { name: 'Solana', icon: 'solana' },
    { name: 'Ethereum', icon: 'ethereum' },
    { name: 'Base', icon: 'base' },
    { name: 'Privy', icon: 'privy' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Helius', icon: 'helius' },
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

                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 max-w-2xl mx-auto mt-8">
                    {RAILS.map((rail) => (
                        <div
                            key={rail.name}
                            title={rail.name}
                            className={cn(
                                "group grid size-14 place-items-center rounded-2xl",
                                "border border-foreground/10 bg-foreground/5",
                                "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/5",
                            )}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`/icons/rails/${rail.icon}.svg`}
                                alt={rail.name}
                                width={30}
                                height={30}
                                className="size-7 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="sr-only">{rail.name}</span>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Socials;
