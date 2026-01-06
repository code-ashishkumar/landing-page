'use client';

const stats = [
  {
    value: '85%',
    label: 'Improved Comprehension'
  },
  {
    value: '10hrs',
    label: 'Saved Per Week'
  },
  {
    value: '100%',
    label: 'IEP Compliant'
  },
  {
    value: '5min',
    label: 'Setup Time'
  }
];

export default function Stats() {
  return (
    <section className="py-12 px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
