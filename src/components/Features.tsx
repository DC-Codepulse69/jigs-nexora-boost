import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Clock, Award, CircleDollarSign, Headphones } from 'lucide-react';

export default function Features() {
  const items = [
    {
      title: 'Trusted by Customers',
      desc: 'Countless recurring clients rely on our premium products for personal and business use.',
      icon: ShieldCheck,
    },
    {
      title: 'Automated System',
      desc: 'No manual processing waiting time. Our systems deliver commands the moment payments post.',
      icon: Cpu,
    },
    {
      title: 'Fast Processing',
      desc: 'Orders start dispatching within minutes, saving you time and giving immediate results.',
      icon: Clock,
    },
    {
      title: 'Quality Products',
      desc: 'We procure high-reputation aged accounts and resilient boosting pipelines.',
      icon: Award,
    },
    {
      title: 'Competitive Pricing',
      desc: 'Premium service does not have to break the bank. Get top tier features at baseline rates.',
      icon: CircleDollarSign,
    },
    {
      title: 'Active Support',
      desc: 'Have a query? Open a ticket on Discord or drop a line to our support staff.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-24 relative bg-bg-dark overflow-hidden">
      {/* Decorative Radial Lights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Core Assets</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Choose Nexora Boost
          </h3>
          <p className="text-gray-400 text-lg">
            We merge premium speed, security, and affordability to deliver an unmatched service standard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 glass-panel-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
