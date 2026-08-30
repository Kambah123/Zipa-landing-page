import { APP_URL } from "./app";

export const Routes = {
    Home: "/",
    Difference: "/#difference",
    Workflow: "/#workflow",
    Capabilities: "/#capabilities",
    Integrations: "/#integrations",
    Membership: "/#membership",
    Faq: "/#faq",
    Dashboard: `${APP_URL}/login`,
    Ambassadors: "/ambassadors",
    AmbassadorsThankYou: "/ambassadors/thank-you",
} as const;
