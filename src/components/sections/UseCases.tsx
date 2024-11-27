import { Store, Laptop, BookOpen, Building2 } from 'lucide-react';

const useCases = [
  {
    id: "ecommerce",
    icon: <Store className="h-6 w-6" />,
    title: "E-commerce Voice Agent",
    description: "Handle customer inquiries, process orders, and provide product recommendations in real-time.",
  },
  {
    id: "saas",
    icon: <Laptop className="h-6 w-6" />,
    title: "SaaS Voice Agent",
    description: "Guide users through features, provide technical support, and assist with subscription management seamlessly.",
  },
  {
    id: "blog",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Blog Voice Agent",
    description: "Engage readers, summarize articles, and provide personalized content recommendations through natural conversations.",
  },
  {
    id: "local",
    icon: <Building2 className="h-6 w-6" />,
    title: "Local Business Voice Agent",
    description: "Schedule appointments, provide service quotes, and handle customer support with a personal touch.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-purple-900">Use Cases</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Explore Our Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how Vox Intelligence can transform your business communication
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:bg-muted/50"
            >
              <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}