import { Card, CardContent } from '../ui/Card';
import { Zap, PiggyBank, TrendingUp, Globe } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Quick & Easy Setup",
    description: "Set up AI voice agents in minutes by simply adding the html code snippets into your desired places.",
  },
  {
    icon: <PiggyBank className="h-6 w-6" />,
    title: "Save Money",
    description: "Reduce costs by implementing voice agents who will help in reducing refunds and also help in increasing sales.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Grow Effortlessly",
    description: "Scale your business easily by handing over customer support product intros to voice agents.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Always On",
    description: "Stay stress-free with our AI voice agents that are 24/7 online.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-gray-900">Benefits</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Why Choose Vocyth?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the advantages of integrating AI voice agents into your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="relative transition-all duration-300 hover:scale-105 hover:bg-muted/50 bg-white rounded-xl shadow-sm"
            >
              <CardContent className="p-6 pt-14">
                <div className="h-12 w-12 rounded-lg bg-primary/10 p-2 flex items-center justify-center mb-5">
                  <div className="text-purple-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
