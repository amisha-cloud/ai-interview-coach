import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Choose your focus",
    description:
      "Select the interview type or role you want to prepare for — HR, technical, or role-specific practice."
  },
  {
    step: "02",
    title: "Practice calmly",
    description:
      "Answer thoughtfully designed questions in a distraction-free, supportive environment at your own pace."
  },
  {
    step: "03",
    title: "Grow with feedback",
    description:
      "Receive clear, encouraging feedback that helps you improve gradually and build real confidence."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HowItWorks() {
  return (
    <section className="relative bg-[#F9FAFB] py-28 overflow-hidden">

      {/* Soft background glow (same family as hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#0F172A]"
        >
          How it works
        </motion.h2>

        <p className="mt-6 text-center text-lg text-[#475569] max-w-2xl mx-auto">
          A simple, stress-free flow designed to help you prepare without pressure.
        </p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                relative p-8 rounded-2xl
                bg-white/70 backdrop-blur
                border border-[#E5E7EB]
                shadow-sm
                hover:shadow-md transition
              "
            >
              {/* Step number */}
              <div className="text-[#4F46E5] text-sm font-semibold tracking-wider">
                STEP {step.step}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#475569] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
