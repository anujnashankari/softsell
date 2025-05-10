"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Turn Unused Software Licenses Into Cash
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SoftSell helps businesses recover value from unused or excess software licenses with our simple, secure, and
          transparent resale platform.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Sell My Licenses
          </a>
          <a
            href="#how-it-works"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Learn How It Works
          </a>
        </motion.div>
      </div>
    </section>
  )
}
