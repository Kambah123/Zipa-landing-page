"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Icons from "./icons";

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const overlayRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        const progressBar = progressBarRef.current;
        const progressFill = progressFillRef.current;
        const logo = logoRef.current;
        if (!overlay || !progressBar || !progressFill || !logo) {
            setIsLoading(false);
            return;
        }

        let completionTimer: ReturnType<typeof setTimeout> | undefined;
        const finish = () => {
            completionTimer = setTimeout(() => setIsLoading(false), 0);
        };

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
            setIsLoading(false);
            return;
        }

        const timeline = gsap.timeline({ onComplete: finish });
        timeline
            .set(overlay, { opacity: 1, y: 0 })
            .set(progressBar, { opacity: 0, y: 20 })
            .set(logo, { opacity: 0, x: 100 })
            .set(progressFill, { scaleX: 0, transformOrigin: "left" })
            .to(progressBar, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", delay: 0.1 })
            .to(logo, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, "<0.05")
            .to(progressFill, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "<")
            .to(overlay, { y: "-100%", duration: 0.6, ease: "power3.inOut", delay: 0.05 });

        return () => {
            timeline.kill();
            if (completionTimer) clearTimeout(completionTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
            style={{ willChange: "transform", opacity: 1 }}
            role="status"
            aria-label="Loading Zipa"
        >
            <div className="flex flex-col items-center gap-3">
                <div ref={logoRef} style={{ willChange: "transform, opacity", opacity: 0, transform: "translateX(100px)" }}>
                    <Icons.wordmark className="h-6 w-auto text-foreground" />
                </div>
                <div
                    ref={progressBarRef}
                    className="mt-2 h-1 w-28 overflow-hidden rounded-full bg-foreground/20 md:w-40"
                    style={{ willChange: "transform, opacity", opacity: 0, transform: "translateY(20px)" }}
                >
                    <div
                        ref={progressFillRef}
                        className="h-full rounded-full bg-foreground"
                        style={{ willChange: "transform", transform: "scaleX(0)", transformOrigin: "left" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
