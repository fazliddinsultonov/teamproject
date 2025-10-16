import  { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  const images = [
    "https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/68199a1f5a02af0dabdd6eb1_hero%20heading%20icon%203.svg",
    "https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/68199a1fb7175a4bcc36e4e0_hero%20heading%20icon.svg",
    "https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/68199a1f11cefccd81f6cd75_hero%20heading%20icon%202.svg",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d%2F6819a156aaef929d61a2d1ce_-f1b0-458a-9854-cdcbfc2e7284-transcode.mp4"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0d011a]/70 via-[#1c012c]/50 to-[#0d011a]/80 z-0"></div>

      <img
        src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6819a2b91f4fa0ef165154cd_d9264fd8166073b9ad2bd7e0c7f5b27a_hero%20rainbow%20visual.avif"
        alt="rainbow visual"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl opacity-60 z-0"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-4xl">
        <motion.a
          href="https://www.flowfye.com/"
          target="_blank"
          className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-[2px] rounded-full text-xs font-semibold">
            New
          </span>
          <p className="text-sm text-gray-200">
            Check our new premium Webflow Templates Flowfye
          </p>
          <img
            src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/68198e2c34b28795ff735898_Hero%20Notification%20Icon.svg"
            alt="arrow"
            className="w-4 h-4"
          />
        </motion.a>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block">Transforming</span>

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Ideas
          </span>

          <div className="flex justify-center gap-3 my-3">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`icon-${index}`}
                className={`w-10 md:w-12 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-30"
                }`}
                animate={{
                  y: ["0%", "-10%", "0%"],
                  rotateZ: [8, -8, 8],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
            Into Visual Masterpieces
          </span>
        </motion.h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 max-w-2xl">
          Unlock potential with seamless tools that empower your team to innovate,
          collaborate, and succeed. Experience the future of productivity.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full text-lg hover:opacity-90 transition">
            Get Started Now
          </Button>
          <Button
            variant="outline"
            className="border  text-black rounded-full px-8 py-3 text-lg transition"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
