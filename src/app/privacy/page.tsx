import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · Zipa",
  description: "How Zipa collects, uses, shares and protects personal data.",
};

const Section = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="text-xl font-semibold tracking-tight text-foreground">{n}. {title}</h2>
    <div className="space-y-3 text-sm leading-7 text-muted-foreground">{children}</div>
  </section>
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <Link href="/" className="text-sm font-medium text-foreground hover:opacity-70">← Back to Zipa</Link>
        <header className="mt-10 border-b border-foreground/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Zipa</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: September 18, 2026</p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            This Privacy Policy explains how Zipa handles personal data when you visit our website,
            use the Zipa application, or use related services. Zipa is currently a beta product
            operating primarily on test networks.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <Section n={1} title="Who is responsible for your data">
            <p>Zipa is operated by <strong className="text-foreground">OneDev Studioo</strong>, Nigeria (CAC BN 9704508), which acts as the data controller for personal data it determines the purposes and means of processing.</p>
            <p>For privacy questions or data-rights requests, contact <a className="font-medium text-foreground underline underline-offset-4" href="mailto:musa@usezipa.xyz">musa@usezipa.xyz</a>.</p>
            <p>This policy is intended to operate consistently with the Nigeria Data Protection Act, 2023 and applicable guidance of the Nigeria Data Protection Commission (NDPC).</p>
          </Section>

          <Section n={2} title="What information we collect">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Account information:</strong> email, phone number or social-login details, @username, display name, optional avatar and profile information.</li>
              <li><strong className="text-foreground">Service activity:</strong> transfers, swaps, conversions, invoices, pay pages, referrals, bill orders, timestamps, notes and public wallet addresses associated with your account.</li>
              <li><strong className="text-foreground">Verification information:</strong> verification status and limited verification results when identity verification is used. Zipa does not store the ID images or biometric material submitted through the verification provider's flow.</li>
              <li><strong className="text-foreground">Bill information:</strong> recipient identifiers you enter for airtime, data, electricity or TV services, together with order and delivery status.</li>
              <li><strong className="text-foreground">Technical information:</strong> IP address, browser/device information, security logs and basic product preferences.</li>
              <li><strong className="text-foreground">Communications:</strong> messages, support requests, feedback and correspondence you send to us.</li>
            </ul>
          </Section>

          <Section n={3} title="Identity verification and biometric data">
            <p>Identity verification is performed through our specialist verification partner, Didit. Documents, selfie video and biometric facial information are submitted within Didit&apos;s verification flow and are handled according to the applicable provider terms and privacy notices.</p>
            <p>Zipa receives the verification outcome and limited information needed to operate the account and meet applicable compliance or risk requirements. We do not intentionally store the underlying ID images or biometric templates on Zipa&apos;s application database.</p>
            <p>Where consent is required for biometric processing, the verification flow obtains the relevant consent before collection. Some verification records may need to be retained where required by law.</p>
          </Section>

          <Section n={4} title="How we use information">
            <ul className="list-disc space-y-2 pl-5">
              <li>to create and operate your account and provide Zipa features;</li>
              <li>to process transfers, swaps, invoices, pay pages and bill orders;</li>
              <li>to authenticate users and protect accounts and infrastructure;</li>
              <li>to conduct identity, fraud and abuse checks where applicable;</li>
              <li>to send transactional messages, receipts, security notices and product communications you can opt out of where applicable;</li>
              <li>to understand product usage and improve Zipa;</li>
              <li>to comply with legal, regulatory, security and dispute-resolution obligations.</li>
            </ul>
            <p>Depending on the processing, our lawful bases may include performance of a contract, legitimate interests, consent and compliance with legal obligations.</p>
          </Section>

          <Section n={5} title="Service providers and sharing">
            <p>We use service providers to operate Zipa, including Privy for authentication and wallet infrastructure, Supabase for database services, Vercel for hosting, Didit for identity verification, Flutterwave for supported bill/payment rails, Helius for blockchain infrastructure, Resend for email delivery and CoinGecko for market-price information.</p>
            <p>We share only the information reasonably necessary for the relevant service. We may also disclose information to professional advisers, regulators, law-enforcement authorities or other parties where required or permitted by law.</p>
            <p>We do not sell personal data and do not use advertising networks for cross-site behavioural advertising.</p>
          </Section>

          <Section n={6} title="International and cross-border processing">
            <p>Some Zipa providers process information outside Nigeria. Where personal data is transferred across borders, Zipa seeks to use the safeguards and lawful transfer mechanisms required by applicable Nigerian data-protection law.</p>
            <p>Because providers may update their infrastructure, the countries and locations used to process information can change. We will update this policy when a material change requires notice.</p>
          </Section>

          <Section n={7} title="Blockchain data">
            <p>Transactions that settle on public blockchain networks are public, pseudonymous and generally irreversible. Wallet addresses and on-chain activity may be visible to anyone and cannot be deleted from the blockchain by Zipa.</p>
            <p>Do not treat a public blockchain address as private information simply because Zipa displays it inside your account.</p>
          </Section>

          <Section n={8} title="Retention and deletion">
            <p>We keep personal data for as long as reasonably necessary for the purposes described here, including account operation, security, dispute handling and legal obligations. Retention periods can differ by data type.</p>
            <p>You may request account deletion by contacting us. We will delete or anonymise personal data that we are not required to retain, subject to legal obligations, legitimate security needs and the permanent nature of public blockchain records.</p>
          </Section>

          <Section n={9} title="Your data rights">
            <p>Subject to applicable law and any lawful limitations, you may have rights including the right to be informed, access, rectification, objection, restriction, portability, erasure and withdrawal of consent where consent is the lawful basis.</p>
            <p>To exercise a right, email <a className="font-medium text-foreground underline underline-offset-4" href="mailto:musa@usezipa.xyz">musa@usezipa.xyz</a>. You may also have the right to lodge a complaint with the NDPC.</p>
          </Section>

          <Section n={10} title="Cookies and local storage">
            <p>The marketing website and application may use functional browser storage for preferences such as theme, language or session state. We do not use advertising cookies for cross-site tracking.</p>
          </Section>

          <Section n={11} title="Security">
            <p>We use technical and organisational safeguards appropriate to the nature of the information, including encrypted transport, access controls, row-level database controls, rate limiting and least-privilege infrastructure access. No online system can be guaranteed completely secure.</p>
            <p>Zipa does not hold your blockchain private keys. Wallet infrastructure is provided through Privy.</p>
          </Section>

          <Section n={12} title="Children">
            <p>Zipa is intended for people aged 18 and over. We do not knowingly provide accounts to children. If you believe a person under 18 has provided personal data to Zipa, contact us so we can review and take appropriate action.</p>
          </Section>

          <Section n={13} title="Changes to this policy">
            <p>We may update this policy as Zipa, our services or applicable requirements change. Material changes will be communicated through the website, application or email where appropriate. The date at the top of this page shows when the current version took effect.</p>
          </Section>

          <Section n={14} title="Contact">
            <p><strong className="text-foreground">OneDev Studioo · Nigeria</strong><br />Privacy contact: <a className="font-medium text-foreground underline underline-offset-4" href="mailto:musa@usezipa.xyz">musa@usezipa.xyz</a></p>
          </Section>
        </div>

        <footer className="mt-14 border-t border-foreground/10 pt-6 text-xs text-muted-foreground">
          <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          <span className="mx-3">·</span>
          <Link href="/" className="hover:text-foreground">Zipa</Link>
        </footer>
      </div>
    </main>
  );
}
