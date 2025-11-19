import { useTypewriter } from '../hooks/useTypewriter';
import { Button } from '../components/ui/Button';
import { FeaturesSection } from '../components/sections/Features';
import { BenefitsSection } from '../components/sections/Benefits';
import { TrainingSection } from '../components/sections/Training';
import { UseCasesSection } from '../components/sections/UseCases';
import { BackedBySection } from '../components/sections/BackedBy';
import { PricingSection } from '../components/sections/Pricing';
import { FAQSection } from '../components/sections/FAQ';
import { SignInButton } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';

const words = ["E-Commerce Store", "SaaS Website", "Website Articles", "Local Business Website"];

export default function Home() {
  const animatedText = useTypewriter(words);

  return (
    <>
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <a
                href="https://elevenlabs.io/text-to-speech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
                  Powered by
                </p>
                <img
                  src="https://storage.googleapis.com/eleven-public-cdn/images/elevenlabs-grants-logo.png"
                  alt="Text to Speech"
                  style={{ width: "250px" }}
                />
              </a>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
              Deploy Real-Time AI Voice Chat Agent on Your{" "}
              <span className="text-primary-500 inline-block min-w-[280px] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 font-black">
                {animatedText}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Add human-like real time trained AI Chat agents wherever you want in less than 5 minutes
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <SignInButton mode="modal" redirectUrl="/post-signup">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </div>
          </div>
        </div>
      </main>
      <FeaturesSection />
      <BenefitsSection />
      <TrainingSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
