"use client"

import { motion } from "framer-motion"
import { ShieldCheck, DollarSign, Clock, Globe } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Secure & Compliant",
      description:
        "Our platform ensures all transactions comply with licensing regulations and data security standards.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Best Market Value",
      description: "Our extensive network of buyers ensures you get the highest possible value for your licenses.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Fast Processing",
      description: "From submission to payment, our streamlined process typically takes less than 5 business days.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Reach",
      description: "Connect with buyers worldwide to maximize your resale opportunities and value.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SoftSell offers unique advantages that make us the preferred choice for software license resale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-muted rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
