"use client";

import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { Users } from "lucide-react";

const AmbassadorCta = () => <section className="w-full py-12 lg:py-16 relative overflow-hidden"><Wrapper><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl border border-foreground/10 bg-card/30 backdrop-blur-sm overflow-hidden"><div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[6rem] -translate-y-1/2 translate-x-1/2" /><div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 md:px-10 md:py-10"><div className="flex items-start gap-4"><div className="hidden sm:flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary shrink-0"><Users className="size-6" /></div><div className="space-y-2 text-center md:text-left"><h3 className="text-xl md:text-2xl font-heading font-medium text-foreground">Become a Zipa Ambassador</h3><p className="text-sm md:text-base text-muted-foreground max-w-md">Help your community discover simpler digital payments. Join our ambassador program and grow with us.</p></div></div><Link href={Routes.Ambassadors}><Button variant="outline" className="rounded-full px-6">Learn more</Button></Link></div></motion.div></Wrapper></section>;

export default AmbassadorCta;
