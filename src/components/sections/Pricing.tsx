import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { SignInButton } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import cn from 'classnames';

export function PricingSection() {
  return (
    <section className="py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-gray-900">Pricing</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground">Select the perfect plan for your AI voice chat needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card 
            key="pay-as-you-go"
            className={cn(
              "relative rounded-2xl bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-muted/50",
              false && "border-2 border-purple-600 shadow-purple-200"
            )}
          >
            <CardHeader>
              <CardTitle>Pay as you go</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">$0.35<span className="text-lg font-normal">/minute</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Up to 5 chat agents
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  24/7 chat support
                </li>
              </ul>
              <SignInButton mode="modal" redirectUrl="/post-signup">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </CardContent>
          </Card>
          <Card 
            key="premium"
            className={cn(
              "relative rounded-2xl bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-muted/50",
              true && "border-2 border-purple-600 shadow-purple-200"
            )}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                Recommended
              </span>
            </div>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">$129<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  400 voice minutes
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Up to 5 chat agents
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  $0.25 per extra minute
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  24/7 chat support
                </li>
              </ul>
              <SignInButton mode="modal" redirectUrl="/post-signup">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
