"use client";

import React from "react";
import Wrapper from "@/components/global/wrapper";
import Icons from "@/components/global/icons";
import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils";

const Footer = () => {
    return (
        <footer className="relative mt-16 w-full overflow-hidden lg:mt-24">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-foreground/0 via-foreground/20 to-foreground/0" />
            <div className="absolute inset-x-0 top-0 mx-auto h-4 w-1/2 bg-foreground/40 blur-[4rem]" />

            <Wrapper className="py-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <div className="min-w-0 lg:col-span-4">
                        <Link href="/" className="inline-block">
                            <Icons.wordmark className="h-5 w-auto text-foreground" />
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                            The username-first crypto bank for Nigeria.
                        </p>
                        <p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground" role="status">
                            Newsletter sign-ups are coming soon. Follow Zipa on social media for updates.
                        </p>
                    </div>

                    <div className="grid min-w-0 grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-8 lg:place-items-end">
                        <div className="min-w-0">
                            <h3 className="mt-0 text-sm font-semibold text-foreground">Product</h3>
                            <ul className="mt-4 space-y-3">
                                {footerLinks.product.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-0">
                            <h3 className="mt-0 text-sm font-semibold text-foreground">Resources</h3>
                            <ul className="mt-4 space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-0">
                            <h3 className="mt-0 text-sm font-semibold text-foreground">Company</h3>
                            <ul className="mt-4 space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 md:flex-row">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            &copy; 2026 ZIPA - ONEDEV LIMITED &middot; Built in Nigeria 🇳🇬
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                            Zipa is in beta on test networks. Real-money services launch after regulatory approvals.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <div className="flex items-center gap-4">
                            {footerLinks.legal.map((link) => (
                                <Link key={link.label} href={link.href} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <span className="hidden h-4 w-px bg-foreground/10 md:block" />
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="opacity-60 transition-opacity hover:opacity-100">
                                    <Image
                                        src={`/icons/integrations/${social.icon}.svg`}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className={cn("size-5 grayscale", social.icon === "x" && "size-4")}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
