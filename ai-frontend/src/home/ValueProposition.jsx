import { motion } from "framer-motion";

const values = [
  {
    title: "Thoughtful AI Interview Practice",
    desc: "Practice realistic interview questions in a calm, focused space where it’s okay to pause, think, and try again."
  },
  {
    title: "Clear and Supportive Feedback",
    desc: "Understand your strengths and improvement areas through structured feedback that guides — never overwhelms."
  },
  {
    title: "Designed to Build Confidence",
    desc: "Every interaction is crafted to reduce anxiety and help you speak naturally, clearly, and with assurance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function ValueProposition() {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#0F172A]"
        >
          Designed for long-term growth
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white 
              p-10 rounded-3xl 
              border border-[#E5E7EB]
              shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#0F172A]">
                {v.title}
              </h3>

              <p className="text-[#334155] leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
