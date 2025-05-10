"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-primary" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal for evaluation.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours based on current demand.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Get Paid",
      description: "Accept our offer and get paid quickly via your preferred payment method.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
