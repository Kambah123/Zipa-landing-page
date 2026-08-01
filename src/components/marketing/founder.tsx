"use client";

import Wrapper from '@/components/global/wrapper';
import SectionBadge from '@/components/ui/section-badge';
import { motion } from 'motion/react';
import FounderCard from './founder-card';
import CompanyFactsCard from './company-facts-card';

const Founder = () => {
    return (
        <section id="founder" className="w-full py-16 lg:py-24 relative">
            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <SectionBadge title="Founder" />

                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Built with AI,
                        <br />
                        for Nigeria
                    </motion.h2>
                </div>

                <motion.div 
                    className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <FounderCard />
                    <CompanyFactsCard />
                </motion.div>
            </Wrapper>
        </section>
    );
};

export default Founder;
