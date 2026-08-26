import localFont from "next/font/local";

export const heading = localFont({
    src: [
        {
            path: "../../public/fonts/Satoshi-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Black.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Variable.woff2",
            weight: "100 900",
            style: "normal",
        },
    ],
    variable: "--font-heading",
});

// Use Satoshi for base body text (keeps everything local - no Google Fonts needed)
export const base = localFont({
    src: [
        {
            path: "../../public/fonts/Satoshi-Variable.woff2",
            weight: "100 900",
            style: "normal",
        },
    ],
    variable: "--font-base",
});

// Use the bold italic Satoshi for handwriting-style accents
export const handwriting = localFont({
    src: [
        {
            path: "../../public/fonts/Satoshi-Variable.woff2",
            weight: "100 900",
            style: "normal",
        },
    ],
    variable: "--font-handwriting",
});
