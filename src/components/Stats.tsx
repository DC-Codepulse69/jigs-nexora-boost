import { Users, ShoppingCart, Award, Zap, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { label: 'Orders Completed', value: '1,000+', icon: ShoppingCart, color: 'from-purple-500 to-pink-500' },
    { label: 'Trusted Seller', value: '100% Legit', icon: Award, color: 'from-emerald-500 to-teal-500' },
  ];

  const features = [
    { label: 'Automatic Delivery', desc: 'Instantly delivered by our high-speed automated systems.', icon: Zap },
    { label: 'Fast Support', desc: 'Active staff members ready to assist in our Discord server.', icon: MessageSquare },
    { label: 'Secure Transactions', desc: 'Protected checkout protocols powered by SellAuth.', icon: ShieldCheck },
  ];

  return (
    <section className="py-20 relative bg-bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              {/* Corner decorative light */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-5 blur-[40px] group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">{stat.label}</p>
                  <h3 className="text-4xl font-extrabold text-white tracking-tight">{stat.value}</h3>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 text-gray-300 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-card-dark/40 border border-white/5 hover:border-neon-blue transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {feat.label}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
