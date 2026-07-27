"use client";

import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq";
import { motion } from "motion/react";

const Faq = () => {
    return (
        <section id="faq" className="w-full py-16 lg:py-24 relative">
            <div className="hidden lg:block absolute -z-10 top-1/4 -right-1/4 size-1/3 bg-primary/10 rounded-full blur-[8rem]" />

            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <SectionBadge title="FAQ" />

                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Questions?
                        <br />
                        Answered.
                    </motion.h2>

                    <motion.p
                        className="desc mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Everything you need to know about sending money the Zipa way.
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-3xl mx-auto mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6 bg-cardbox">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="px-3 sm:px-4"
                                >
                                    <AccordionTrigger className="text-base font-medium hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </motion.div>
            </Wrapper>
        </section>
    );
};

export default Faq;
