import { motion } from "framer-motion"

export default function Slider() {
  return (
    <section
      className="relative flex items-center justify-center text-center py-20 md:py-28 px-6 overflow-hidden bg-[#0b0218]"
      aria-label="Call to action section"
    >
      {/* 🔮 Background pattern */}
      <div
        className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6870ccbab401dd609217738f_cta%20section%20icon.svg')] bg-cover bg-center opacity-[0.03] scale-105"
        aria-hidden="true"
      ></div>

      {/* 🎨 Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/20 to-black/80 pointer-events-none"></div>

      {/* 🌟 Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.4)]"
        >
          <img
            src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6870ccbab401dd609217738f_cta%20section%20icon.svg"
            alt="CTA section icon"
            className="w-8 h-8 object-contain"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        >
          Build the perfect site for{" "}
          <br className="hidden sm:block" />
          your business
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/contact"
            className="px-8 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Get Started Now
          </a>
          <a
            href="/about"
            className="px-8 py-3 rounded-full text-base font-medium text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
