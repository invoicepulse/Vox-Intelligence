import { Button } from '../components/ui/Button';
import { SignInButton } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import { FeaturesSection } from '../components/sections/Features';
import { BenefitsSection } from '../components/sections/Benefits';

export default function Features() {
  return (
    <div>
      <div className="relative isolate px-6 pt-16 lg:px-8">
      <FeaturesSection />
     
      </div>
      
      <BenefitsSection />
    </div>
  );
}