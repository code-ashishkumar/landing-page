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
    <section className="py-12 px-9 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3 text-primary">
            Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Start free, scale as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.highlight 
                  ? 'bg-primary text-white shadow-lg scale-105 z-10' 
                  : 'bg-white border border-gray-100 text-gray-900 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-3">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-400'}`}>{plan.period}</span>}
              </div>

              <p className={`text-xs mb-5 ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`mt-0.5 text-xs ${plan.highlight ? 'text-white' : 'text-primary'}`}>✓</span>
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === 'Contact Sales' ? '/contact' : '#pricing'}
                className={`w-full py-2.5 rounded-full font-semibold text-xs transition-all mt-auto text-center block ${
                  plan.highlight
                    ? 'bg-white text-primary hover:bg-gray-50'
                    : 'bg-primary text-white hover:bg-purpleDark'
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
