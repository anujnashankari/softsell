"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I'm SoftSell's virtual assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "Is my data secure?",
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // In a real implementation, this would use the OpenAI API
      // For this demo, we'll simulate a response
      const prompt = `
        You are a helpful assistant for SoftSell, a software license resale platform.
        Answer the following question about software license resale:
        ${input}
      `

      // Simulate API call with timeout
      setTimeout(async () => {
        let response

        // Mock responses for example questions
        if (input.toLowerCase().includes("how do i sell")) {
          response =
            "To sell your license, simply fill out our contact form with your license details. Our team will evaluate it and provide a valuation within 24 hours. Once you accept our offer, we'll guide you through the transfer process and payment."
        } else if (input.toLowerCase().includes("types of licenses")) {
          response =
            "We accept a wide range of software licenses including Microsoft, Adobe, AutoCAD, Oracle, SAP, Salesforce, and many others. Enterprise, volume, and perpetual licenses typically have the highest resale value."
        } else if (input.toLowerCase().includes("how long")) {
          response =
            "Our process is designed to be quick and efficient. You'll receive a valuation within 24 hours of submitting your license details. Once accepted, payment is typically processed within 3-5 business days."
        } else if (input.toLowerCase().includes("secure") || input.toLowerCase().includes("data")) {
          response =
            "Yes, your data is completely secure. We use enterprise-grade encryption and comply with all relevant data protection regulations. We only collect the information necessary to validate and transfer licenses."
        } else {
          // For other questions, provide a generic response
          response =
            "Thank you for your question. SoftSell specializes in helping businesses recover value from unused software licenses. Our process is simple, secure, and transparent. If you have specific questions about your licenses, please fill out our contact form and our team will assist you directly."
        }

        setMessages((prev) => [...prev, { role: "system", content: response }])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        { role: "system", content: "I'm sorry, I encountered an error. Please try again later." },
      ])
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleExampleClick = (question) => {
    setInput(question)
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-background border border-border rounded-lg shadow-xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">SoftSell Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Example questions */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(question)}
                      className="text-xs bg-muted px-2 py-1 rounded-full hover:bg-muted/80 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
