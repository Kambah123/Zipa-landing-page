"use client";

import Icons from '@/components/global/icons';
import Wrapper from '@/components/global/wrapper';
import { APP_URL } from "@/constants/app";
import { useIsMobile } from "@/hooks";
import { cn } from '@/utils';
import { motion } from 'motion/react';
import React from 'react';
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";

// Simple monogram cards for the real rails Zipa runs on
const MonogramCard = ({
    label,
    className,
    isCenter = false,
}: {
    label: string;
    className?: string;
    isCenter?: boolean;
}) => (
    <div
        className={cn(
            "relative group flex size-12 rounded-full border border-foreground/10 bg-background backdrop-blur-md items-center justify-center",
            className
        )}
    >
        <span className={cn(
            "font-mono font-bold text-primary/80 tracking-wider leading-none",
            isCenter ? "text-xs" : "text-[9px]"
        )}>
            {label}
        </span>
    </div>
);

const Integrations = () => {

    const isMobile = useIsMobile();

    return (
        <section id="integrations" className="w-full py-16 lg:py-24 relative z-0">
            <div className="hidden lg:block absolute -z-10 top-0 -right-1/4 inset-1/12 bg-primary/5 rounded-full blur-[8rem]" />
            <div className="hidden lg:block absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-52 lg:size-80 bg-primary/10 rounded-full blur-[8rem]" />

            <Particles
                quantity={100}
                ease={10}
                color={isMobile ? "#404040" : "#CFF94D"}
                vx={0}
                vy={0}
                className="absolute hidden lg:block top-0 lg:top-1/3 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 -z-10 size-full lg:size-1/2"
            />

            <Wrapper>
                <div className="aspect-16/10 group relative mx-auto flex max-w-80 items-center justify-between sm:max-w-xs lg:max-w-md">
                    <div
                        role="presentation"
                        className="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin hidden lg:block items-center justify-center rounded-full border-t from-primary/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
                    />

                    <div
                        role="presentation"
                        className="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-primary/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
                        style={{ animationDirection: 'reverse' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-linear-to-b from-foreground/10 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t border-foreground/5 to-transparent to-25% z-30"
                    >
                        <MonogramCard label="SOL" className="absolute left-0 top-1/4 -translate-x-1/6 -translate-y-1/4" />
                        <MonogramCard label="ETH" className="absolute top-0 -translate-y-1/2" />
                        <MonogramCard label="BASE" className="absolute right-0 top-1/4 translate-x-1/6 -translate-y-1/4" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-linear-to-b from-foreground/10 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t border-foreground/5 to-transparent to-25% z-30"
                    >
                        <MonogramCard label="PRV" className="absolute top-0 -translate-y-1/2" />
                        <MonogramCard label="SB" className="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4" />
                        <MonogramCard label="HEL" className="absolute right-0 top-1/4 translate-x-1/4 -translate-y-1/4" />
                    </motion.div>

                    <Container animation="blurIn" delay={0.5} className="absolute inset-x-0 bottom-0 lg:bottom-1/10 mx-auto my-2 flex justify-center gap-2 w-fit scale-90 lg:scale-100">
                        <div className="bg-primary/5 relative z-20 rounded-full border border-foreground/10 backdrop-blur-sm p-1.5 group">
                            <div className="size-14 flex items-center justify-center rounded-full bg-primary/5">
                                <Icons.icon className="size-8 text-primary group-hover:scale-110 group-active:scale-95 transition-all duration-300" />
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="relative z-20 mx-auto -mt-4 max-w-lg space-y-6 text-center">
                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        Runs on the best rails
                    </motion.h2>

                    <motion.p
                        className="desc mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        Solana, Ethereum, Base, Privy, Supabase and Helius - battle-tested infrastructure powering every transaction.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <a href={`${APP_URL}/login`} target="_self">
                            <Button variant="white">
                                Get Started
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Integrations;
