import React from "react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB secure storage",
      "Basic analytics dashboard",
      "Email support",
      "Access to core features",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: "99.99",
    description: "Best for growing teams that need more power and flexibility",
    features: [
      "Up to 15 team members",
      "50GB secure storage",
      "Advanced analytics & insights",
      "Priority email support",
      "Custom integrations",
      "Faster performance",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "Designed for large teams and businesses at scale",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Real-time analytics & reports",
      "24/7 priority support",
      "Dedicated account manager",
      "Enterprise-level security",
    ],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose a plan that fits your needs with clear pricing and no hidden
            costs. Upgrade or scale anytime as your team and projects grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 flex flex-col ${plan.mostPopular
                ? "border-blue-500 shadow-2xl shadow-blue-500/20 scale-105"
                : "border-slate-800 hover:border-slate-700"
                }`}
            >
              {/* OVerlay */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-white/20 via-white/5 to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all duration-700 ease-out
                translate-x-0 translate-y-0
                pointer-events-none
                " />
              {/* Badge */}
              {plan.mostPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan Info */}
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-6 text-center">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400 text-sm"> / month</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-auto w-full py-3 rounded-lg font-semibold transition ${plan.mostPopular
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-content text-center">
          <p className="text-gray-400 text-base text-xl">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Conatact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
