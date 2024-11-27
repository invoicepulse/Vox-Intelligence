import React from 'react';

export default function ForStartups() {
  return (
    <div className="min-h-screen">
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Get The{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                Best Deals
              </span>{' '}<br className="sm:hidden"/>
              For Your Startup<br /> with Vox Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are offering our startup customers{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 font-semibold">
                3 months free of Premium Plan
              </span>{' '}
              and best deals from other tools. Just reach out to our partnership manager after sign up if you want to apply.
            </p>
          </div>
          
          <div className="w-full rounded-lg overflow-hidden shadow-xl bg-white">
            <iframe 
              src="https://voiceflows.builtfirst.com" 
              height="1000" 
              width="100%" 
              title="Builtfirst Offers iFrame"
              className="border-0"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
