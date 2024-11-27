import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Vox Intelligence AI voice agent work?",
    answer: "Our AI voice agents use advanced natural language processing and machine learning to understand and respond to customer queries in real-time. They can handle multiple conversations simultaneously, understand context, and provide human-like interactions while maintaining consistency in responses."
  },
  {
    question: "Can I customize the voice and personality of the AI agent?",
    answer: "Yes! You can customize various aspects of your AI voice agent, including voice tone, language style, personality traits, and response patterns. This ensures the agent aligns perfectly with your brand identity and communication style."
  },
  {
    question: "What languages are supported by Vox Intelligence?",
    answer: "Vox Intelligence supports multiple languages and can handle multilingual conversations. Our AI agents can seamlessly switch between languages during conversations, making them perfect for businesses with a global customer base."
  },
  {
    question: "How does pricing work for voice minutes?",
    answer: "Voice minutes are calculated based on the actual conversation time between the AI agent and your customers. We offer a pay-as-you-go model at $0.35/minute and a Premium plan with better rates for higher volumes. Unused minutes in the Premium plan roll over to the next month."
  },
  {
    question: "Can I integrate Vox Intelligence with my existing systems?",
    answer: "Absolutely! Vox Intelligence provides APIs and integrations for popular platforms including CRM systems, e-commerce platforms, and customer service tools. Our team can help you set up custom integrations for your specific needs."
  },
  {
    question: "How accurate is the voice recognition and response system?",
    answer: "Our AI system achieves over 95% accuracy in voice recognition and understanding intent. The system continuously learns from interactions to improve accuracy and can handle various accents and speech patterns effectively."
  },
  {
    question: "What kind of analytics and reporting is available?",
    answer: "We provide comprehensive analytics including conversation metrics, customer sentiment analysis, popular topics, peak usage times, and conversion rates. You can access real-time dashboards and generate custom reports to track KPIs important to your business."
  }
];

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-transparent last:border-0">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:bg-muted/50 rounded-lg px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-purple-900">FAQs</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about Vox Intelligence
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 transition-all duration-300 hover:scale-105 hover:bg-muted/50">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
          
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-muted-foreground">
              Have more questions? Reach out to{' '}
              <a href="mailto:help@voxintelligence.online" className="text-purple-600 hover:text-purple-700 font-medium">
                help@voxintelligence.online
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
