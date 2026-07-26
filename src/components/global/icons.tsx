import { LucideProps } from "lucide-react";
import React from 'react';

const ZipaGlyph = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
        <g transform="translate(10.6 0) skewX(-12)" fill="currentColor">
            <path d="M12 10H88V36L72.25 46.5H38.25L54 36H12Z" />
            <path d="M61.75 53.5L46 64H88V90H12V64L27.75 53.5Z" />
        </g>
    </svg>
);

const Icons = {
    icon: (props: LucideProps) => (
        <ZipaGlyph {...(props as React.SVGProps<SVGSVGElement>)} />
    ),
    wordmark: (props: LucideProps) => {
        const { className, style, ...rest } = props as React.SVGProps<SVGSVGElement> & { className?: string; style?: React.CSSProperties };
        return (
            <span
                className={className}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.05em',
                    textTransform: 'lowercase',
                    color: 'currentColor',
                    lineHeight: 1,
                    ...style,
                }}
            >
                <ZipaGlyph
                    style={{ height: '0.74em', width: 'auto' }}
                    aria-hidden="true"
                />
                <span>ipa</span>
            </span>
        );
    },
    wordmarkGradient: (props: LucideProps) => {
        const { className, style, ...rest } = props as React.SVGProps<SVGSVGElement> & { className?: string; style?: React.CSSProperties };
        return (
            <span
                className={className}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.05em',
                    textTransform: 'lowercase',
                    color: '#CFF94D',
                    lineHeight: 1,
                    ...style,
                }}
            >
                <ZipaGlyph
                    style={{ height: '0.74em', width: 'auto', color: '#CFF94D' }}
                    aria-hidden="true"
                />
                <span>ipa</span>
            </span>
        );
    },
    menu: (props: LucideProps) => (
        <svg {...(props as React.SVGProps<SVGSVGElement>)} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H17M1 6H17M1 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

export default Icons;
