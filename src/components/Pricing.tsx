'use client';

export default function Pricing() {
  const plans = [
    {
      name: 'Freemium',
      price: '$0',
      period: '/month',
      description: 'Perfect for trying Praxis',
      features: [
        '1 Teacher Account',
        'Up to 5 Students',
        'Limited Paraphrasing',
        'Basic Emoji Sets',
        'Email Support'
      ],
      cta: 'Start Free',
      highlight: false
    },
    {
      name: 'Pro',
      price: '$12',
      period: '/month',
      description: 'Per teacher or $3/student/month',
      features: [
        'Unlimited Paraphrasing',
        'Unlimited Students',
        'All Emoji Sets',
        'Progress Analytics',
        'IEP Reports',
        'Priority Support'
      ],
      cta: 'Start Pro Trial',
      highlight: true,
      badge: 'MOST POPULAR'

    },
    {
      name: 'District',
      price: 'Custom',
      period: '',
      description: 'For schools & districts',
      features: [
        'Everything in Pro',
        'SIS/LMS Integration',
        'Teacher Training',
        'Dedicated Support',
        'Custom Reporting',
        'Volume Discounts'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Pricing
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4">
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Start free, scale as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight 
                  ? 'bg-black text-white' 
                  : 'border  bg-gray-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-lg text-gray-400">{plan.period}</span>}
              </div>

              <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`mt-1 ${plan.highlight ? 'text-white' : 'text-black'}`}>✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === 'Contact Sales' ? '/contact' : '#pricing'}
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all mt-auto text-center block ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
