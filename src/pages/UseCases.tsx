import { Button } from '../components/ui/Button';
import { SignInButton } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import { UseCasesSection } from '../components/sections/UseCases';
import { BenefitsSection } from '../components/sections/Benefits';
import { FAQSection } from '../components/sections/FAQ';

export default function UseCases() {
  return (
    <div className="min-h-screen">
      <main className="pt-7 pb-7 sm:pt-7 sm:pb-7">
        <div className="relative isolate px-6 pt-14 lg:px-8">
        </div>
        <UseCasesSection />
        <BenefitsSection />
        <FAQSection />
      </main>
    </div>
  );
}