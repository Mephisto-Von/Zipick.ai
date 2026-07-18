"use client"

import { useState, useRef, useEffect } from "react"
import { Button, Input } from "@/components/ui"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI shopping assistant. I can help you find the best products, compare prices, check reviews, and make smart buying decisions. What are you looking for?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMsg: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I've analyzed your request for "${input}". Based on my research across multiple marketplaces, here's my recommendation:\n\n**Top Pick**: The best option balances price, quality, and availability. I found 3 great matches.\n\nWould you like me to compare them in detail?`,
        },
      ])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Shopping Assistant</h1>
        <p className="mt-2 text-gray-600">Ask me anything about products, prices, or suppliers.</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-brand-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder='Ask about products, e.g., "Best gaming laptop under $1200"...'
              className="flex-1"
            />
            <Button onClick={handleSend} loading={loading}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
