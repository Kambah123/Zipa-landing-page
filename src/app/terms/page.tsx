import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service · Zipa",
  description: "Terms governing use of Zipa and its beta services.",
};

const Section = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="text-xl font-semibold tracking-tight text-foreground">{n}. {title}</h2>
    <div className="space-y-3 text-sm leading-7 text-muted-foreground">{children}</div>
  </section>
);

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <Link href="/" className="text-sm font-medium text-foreground hover:opacity-70">← Back to Zipa</Link>
        <header className="mt-10 border-b border-foreground/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Zipa</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: September 18, 2026</p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            These terms govern your access to the Zipa website, application, pay pages and related beta services.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <Section n={1} title="Who we are">
            <p>Zipa is operated by <strong className="text-foreground">OneDev Studioo</strong>, Nigeria (CAC BN 9704508). In these terms, &quot;Zipa&quot;, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Zipa and its operator.</p>
            <p>By creating an account or using a Zipa service, you agree to these terms and the Privacy Policy.</p>
          </Section>

          <Section n={2} title="Beta status and test balances">
            <p><strong className="text-foreground">Zipa is currently a beta technology preview.</strong> Crypto and naira balances displayed as test balances are not money, deposits or redeemable assets. Test balances may exist on test networks or in Zipa&apos;s internal ledger and may be reset or removed during development.</p>
            <p>Do not send real cryptocurrency to a test-network address or rely on a displayed test balance as having monetary value.</p>
            <p>Zipa does not currently represent itself as providing regulated real-money banking, custody, money transmission, exchange or investment services. Real-money features will require the applicable regulatory arrangements and updated terms.</p>
          </Section>

          <Section n={3} title="Real bill deliveries during beta">
            <p>Some bill features may deliver real airtime, data, electricity or TV value through third-party payment and delivery infrastructure even while the Zipa balance used to initiate the order is a test balance.</p>
            <p>Availability, limits and delivery may be paused or changed. A successful delivery to the recipient information you confirmed is treated as completed. Failed deliveries are handled according to the applicable Zipa and provider refund process.</p>
          </Section>

          <Section n={4} title="Eligibility and account information">
            <p>You must be at least 18 years old and legally capable of entering these terms. You agree to provide accurate information and to use only accounts and credentials belonging to you.</p>
            <p>Usernames are identifiers, not property rights. We may reclaim or restrict usernames used for impersonation, infringement, fraud, squatting or other abuse.</p>
          </Section>

          <Section n={5} title="Account security">
            <p>Zipa uses authentication infrastructure provided by Privy. You are responsible for protecting the email address, phone number and devices used to access your account.</p>
            <p>Zipa will never ask you for a password, one-time code or seed phrase. If you believe your account is compromised, contact us promptly.</p>
          </Section>

          <Section n={6} title="Identity verification">
            <p>Some features may require identity verification. Verification is performed through Didit. You must submit genuine information and documents belonging to you.</p>
            <p>Fraudulent, altered or borrowed identity documents may result in verification failure, suspension or termination. Verification results may be reviewed or revoked when required for security, fraud prevention or compliance.</p>
          </Section>

          <Section n={7} title="Wallets and blockchain transactions">
            <p>Blockchain wallets are created through Privy. Zipa does not hold or directly receive your private keys.</p>
            <p>Transactions on public blockchains are irreversible once confirmed, except where the relevant network or protocol itself provides a reversal mechanism. Network congestion, fees, outages and third-party infrastructure can affect transaction timing.</p>
          </Section>

          <Section n={8} title="Naira wallet and conversions">
            <p>During beta, the Zipa naira wallet is a test ledger balance. Any deposit, conversion or withdrawal simulation is clearly presented as test functionality and does not create a promise to pay real naira.</p>
            <p>Where Zipa displays market prices or conversion rates, they are informational and may change. Any applicable fee is shown before confirmation and may be changed with notice.</p>
          </Section>

          <Section n={9} title="Bills, invoices and public pay pages">
            <p>You are responsible for entering correct recipient details when ordering bills. You are also responsible for the accuracy and legality of invoices, descriptions and public pay pages you create.</p>
            <p>Public pay pages may be accessible to anyone who has the link and may display the profile information you choose to publish. We may remove pages connected to fraud, deception, abuse or unlawful activity.</p>
          </Section>

          <Section n={10} title="Referrals and Zipa Points">
            <p>Zipa Points and referral rewards are promotional loyalty points, not cash, deposits, securities or cryptocurrency. They have no monetary value unless Zipa expressly states otherwise in a future program.</p>
            <p>We may void rewards obtained through self-referrals, multiple accounts, automation, manipulation or other abusive activity and may change or end a rewards program.</p>
          </Section>

          <Section n={11} title="Acceptable use">
            <p>You must not use Zipa to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>commit or facilitate unlawful, fraudulent or deceptive activity;</li>
              <li>impersonate another person, business or brand;</li>
              <li>submit false identity information or someone else&apos;s documents;</li>
              <li>attack, probe, disrupt or bypass the security of Zipa or another user;</li>
              <li>abuse faucets, referrals, bill services, limits or automated systems;</li>
              <li>misrepresent test balances or beta functionality as real funds or regulated financial services.</li>
            </ul>
          </Section>

          <Section n={12} title="Third-party services">
            <p>Zipa depends on third-party infrastructure including Privy, Supabase, Vercel, Didit, Flutterwave, Helius, Resend, CoinGecko and public blockchain networks. Their availability, policies and terms may apply to their respective services.</p>
            <p>Flutterwave states on its official materials that its Nigerian operations hold applicable payment licences. Zipa&apos;s use of a licensed provider does not itself make Zipa a licensed financial institution.</p>
          </Section>

          <Section n={13} title="Availability and changes">
            <p>The beta service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Features may change, be interrupted or be removed, and test data may be reset. Public blockchains, wallets, infrastructure providers and billers may experience outages outside our control.</p>
          </Section>

          <Section n={14} title="Intellectual property">
            <p>The Zipa name, branding, product design and software are owned by or licensed to the operator. You receive a limited, non-exclusive and revocable right to use the service for its intended purpose. You may not copy, resell or commercially exploit the service without permission.</p>
          </Section>

          <Section n={15} title="Disclaimers and liability">
            <p>Zipa does not provide financial, investment, legal or tax advice. Market information is informational only.</p>
            <p>To the maximum extent permitted by applicable law, we are not responsible for indirect or consequential losses arising from use of the beta service, third-party failures, public blockchain behaviour or loss of test data. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>
          </Section>

          <Section n={16} title="Real-money services">
            <p>If Zipa launches real-money financial features, those services may be subject to additional eligibility, KYC/AML, fees, risk disclosures, regulatory requirements and separate terms. We will not treat beta test balances or points as an entitlement to future real-money services.</p>
          </Section>

          <Section n={17} title="Suspension and termination">
            <p>You may stop using Zipa at any time. We may restrict, suspend or terminate access where reasonably necessary for security, fraud prevention, legal compliance, abuse prevention or violation of these terms.</p>
            <p>Test balances and Zipa Points have no redemption value on termination.</p>
          </Section>

          <Section n={18} title="Governing law and disputes">
            <p>These terms are governed by the laws of the Federal Republic of Nigeria. Please contact us first at <a className="font-medium text-foreground underline underline-offset-4" href="mailto:musa@usezipa.xyz">musa@usezipa.xyz</a> so we can attempt to resolve a dispute. Subject to any mandatory consumer or statutory rights, unresolved disputes may be brought before the courts of Nigeria.</p>
          </Section>

          <Section n={19} title="Changes to these terms">
            <p>We may update these terms as Zipa develops. For material changes, we will provide reasonable notice through the app, website or email where appropriate. The updated version will show a new &quot;Last updated&quot; date.</p>
          </Section>

          <Section n={20} title="Contact">
            <p><strong className="text-foreground">OneDev Studioo · Nigeria</strong><br />Email: <a className="font-medium text-foreground underline underline-offset-4" href="mailto:musa@usezipa.xyz">musa@usezipa.xyz</a><br />X: @0xSkamber</p>
          </Section>
        </div>

        <footer className="mt-14 border-t border-foreground/10 pt-6 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <span className="mx-3">·</span>
          <Link href="/" className="hover:text-foreground">Zipa</Link>
        </footer>
      </div>
    </main>
  );
}
