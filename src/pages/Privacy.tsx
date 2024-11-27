import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-purple max-w-none">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Vox Intelligence Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: November 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Vox Intelligence ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI voice agent services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company details</li>
              <li>Billing information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Usage Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Access times</li>
              <li>Pages viewed</li>
              <li>Interactions with our AI voice agents</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Voice Interaction Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Conversation transcripts</li>
              <li>Voice recordings</li>
              <li>Communication preferences</li>
              <li>User queries and responses</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Provide and maintain our services</li>
              <li>Notify you about changes to our platform</li>
              <li>Allow you to participate in interactive features</li>
              <li>Provide customer support</li>
              <li>Gather analysis to improve our services</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>All data is stored on secure, encrypted servers</li>
              <li>We implement industry-standard security measures</li>
              <li>Access to personal data is strictly limited to authorized personnel</li>
              <li>Regular security audits are conducted</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Third-party service providers</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners for service enhancement</li>
              <li>Potential business merger or acquisition partners</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. User Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Request data deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Request information about data processing</li>
              <li>Correct inaccurate personal information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-4">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Enhance user experience</li>
              <li>Understand usage patterns</li>
              <li>Personalize content</li>
              <li>Track website performance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our service may contain links to external websites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your data may be transferred and processed in countries outside your home country.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">11. Changes to Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy periodically. We will notify you of any significant changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">For privacy-related inquiries, contact:</p>
            <ul className="list-none text-muted-foreground">
              <li>Email: <a href="mailto:help@voxintelligence.online" className="text-purple-600 hover:text-purple-700">help@voxintelligence.online</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">13. Consent</h2>
            <p className="text-muted-foreground">
              By using Vox Intelligence services, you consent to this Privacy Policy.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}