import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-6"
        >
          You’re more prepared than you think
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-[#334155] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Practice interviews in a calm, supportive space.
          Take your time. Learn at your pace. Grow with confidence.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="px-12 py-4 rounded-xl 
          bg-gradient-to-r from-[#4F46E5] to-[#6366F1]
          text-white font-semibold
          shadow-[0_10px_30px_rgba(79,70,229,0.35)]"
        >
          Create a free account
        </motion.button>

        {/* Gentle reassurance */}
        <p className="mt-6 text-sm text-[#64748B]">
          No pressure • No commitments • Just practice
        </p>

      </div>
    </section>
  );
}
