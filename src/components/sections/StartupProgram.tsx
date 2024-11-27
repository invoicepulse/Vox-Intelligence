import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StartupProgramSection() {
  const eligibilityCriteria = [
    'Less than 10 employees',
    'Received less than $1 Million in funding',
    'Have not used Vox Intelligence before'
  ];

  const benefits = [
    '3 Months Premium Plan',
    '$10M in Software Deals',
    'Priority Support'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-purple-900">For Startups</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Are You a Startup?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            We're offering 3 months of premium plan and $10 Million in Software deals free for eligible startups
          </p>
          <Link to="/for-startups">
            <Button size="lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 transition-all duration-300 hover:scale-105 hover:bg-muted/50 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">What You Get</h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
