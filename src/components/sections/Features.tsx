import React from 'react';
import { MessageSquare, Globe2, Users, ShoppingCart, Clock, Sparkles, BarChart2 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className = '' }) => (
  <div className={`relative transition-all duration-300 hover:scale-105 hover:bg-muted/50 bg-white rounded-xl shadow-sm ${className}`}>
    <div className="p-6 pt-14">
      <div className="h-12 w-12 rounded-lg bg-primary/10 p-2 flex items-center justify-center mb-5">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-purple-900">Features</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the advanced capabilities of our AI voice agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <FeatureCard
            title="Real-Time Conversational AI"
            description="Engage customers instantly with human-like voice interactions. Our AI agents understand context, nuance, and intent, providing natural conversations that feel genuinely human and responsive."
            icon={<MessageSquare className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-4"
          />
          <FeatureCard
            title="Multilingual Communication"
            description="Break language barriers with AI agents that can communicate fluently in multiple languages, expanding your business's global reach and providing inclusive customer experiences."
            icon={<Globe2 className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-2"
          />
          <FeatureCard
            title="Enhanced Customer Support"
            description="Reduce wait times and provide 24/7 instant support. Our AI agents can handle multiple inquiries simultaneously, resolve common issues, and escalate complex problems to human agents when needed."
            icon={<Users className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-2"
          />
          <FeatureCard
            title="Sales Conversion Optimization"
            description="Transform user interactions into sales opportunities. The AI voice agent acts as a knowledgeable sales representative, answering product questions, providing recommendations, and guiding customers through the purchase process."
            icon={<ShoppingCart className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-2"
          />
          <FeatureCard
            title="Advanced Analytics and Insights"
            description="Gain deep understanding of customer interactions with comprehensive real-time analytics. Track conversation metrics, customer sentiment, frequently asked questions, and conversion rates. Our intelligent reporting system helps you continuously improve customer experience and identify key areas of opportunity for your business."
            icon={<BarChart2 className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-2"
          />
          <FeatureCard
            title="Versatile Business Integration"
            description="Seamlessly deploy AI voice agents across multiple platforms - websites, SaaS applications, e-commerce stores, local business sites, and customer support channels. One solution, infinite possibilities."
            icon={<Clock className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-2"
          />
          <FeatureCard
            title="Advanced Personalization"
            description="Learn and adapt to individual user preferences. Our AI voice agents use machine learning to provide increasingly personalized interactions, creating memorable and tailored customer experiences."
            icon={<Sparkles className="h-6 w-6 text-purple-600" />}
            className="lg:col-span-4"
          />
        </div>
      </div>
    </section>
  );
};