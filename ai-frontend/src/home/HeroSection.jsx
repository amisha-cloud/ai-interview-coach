import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#F1F5F9] to-[#EEF2F6]">

      {/* Soft ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-36">
        <div className="mx-auto max-w-4xl text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight text-[#0F172A]"
          >
            Interviews don’t have to feel scary
            <span className="block mt-4 text-[#4F46E5] font-medium">
              prepare with calm and clarity
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 text-lg md:text-xl text-[#334155] max-w-3xl mx-auto leading-relaxed"
          >
            This AI interview coach helps you slow down, organize your thoughts,
            and practice answers in a supportive, pressure-free space —
            so you can speak with confidence when it matters.
          </motion.p>

          {/* Trust hint */}
          <p className="mt-6 text-sm tracking-wide text-[#64748B]">
            Designed for students, freshers, and professionals
          </p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-12 py-4 rounded-xl 
              bg-gradient-to-r from-[#4F46E5] to-[#6366F1]
              text-white font-semibold
              shadow-[0_10px_30px_rgba(79,70,229,0.35)]"
            >
              Start practicing gently
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-12 py-4 rounded-xl 
              border border-[#CBD5E1]
              text-[#0F172A]
              hover:bg-white/60 transition"
            >
              See how it helps
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
