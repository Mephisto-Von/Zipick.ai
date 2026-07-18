"use client"

import { useState, useRef, useEffect } from "react"
import { Button, Input, Badge, StarRating } from "@/components/ui"
import { endpoints } from "@/lib/api"

interface Message {
  role: "user" | "assistant"
  type: "text" | "analysis"
  content: string
  agents?: Array<{ agent_type: string; findings?: { summary?: string; recommendations?: any[] } }>
  recommendations?: Array<{ name: string; current_price: number; source?: string; rating?: number }>
}

const AGENT_ICONS: Record<string, string> = {
  search: "🔍",
  price: "💰",
  review: "⭐",
  comparison: "⚖️",
  recommendation: "🎯",
  supplier: "🏭",
  logistics: "🚚",
  finance: "💳",
  compliance: "✅",
  quality: "🏆",
  market: "📊",
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      type: "text",
      content: "Hi! I'm your AI shopping assistant. I coordinate 14 specialized agents to find you the best products, prices, and deals. Try asking about any product!",
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

    const userMsg: Message = { role: "user", type: "text", content: input }
    setMessages((prev) => [...prev, userMsg])
    const query = input
    setInput("")
    setLoading(true)

    try {
      const res: any = await endpoints.agents.execute(query)
      const data = res?.data

      const agentOutputs = data?.agent_outputs || []
      const recommendations = data?.recommendations || []
      const summary = data?.summary || ""

      const msg: Message = {
        role: "assistant",
        type: "analysis",
        content: summary || `I analyzed "${query}" across ${agentOutputs.length} agents.`,
        agents: agentOutputs.map((a: any) => ({
          agent_type: a.agent_type,
          findings: a.findings,
        })),
        recommendations,
      }
      setMessages((prev) => [...prev, msg])
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          type: "text",
          content: `I tried to search for "${query}" but encountered an error. The AI agent system might be temporarily unavailable. Please try again.`,
        },
      ])
    }
    setLoading(false)
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
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-brand-600 text-white"
                    : "bg-gray-50 text-gray-900 border border-gray-200"
                }`}
              >
                {msg.role === "user" ? (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <div className="text-sm">
                    <p className="whitespace-pre-wrap mb-3">{msg.content}</p>

                    {msg.agents && msg.agents.length > 0 && (
                      <div className="space-y-2 mb-3">
                        <p className="font-semibold text-xs uppercase text-gray-500 tracking-wider">Agent Analysis</p>
                        {msg.agents.map((agent, j) => (
                          <div key={j} className="bg-white rounded-lg p-3 border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                              <span>{AGENT_ICONS[agent.agent_type] || "🤖"}</span>
                              <span className="font-medium text-xs capitalize">{agent.agent_type}</span>
                            </div>
                            {agent.findings?.summary && (
                              <p className="text-xs text-gray-600">{agent.findings.summary}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {msg.recommendations && msg.recommendations.length > 0 && (
                      <div>
                        <p className="font-semibold text-xs uppercase text-gray-500 tracking-wider mb-2">Top Recommendations</p>
                        <div className="space-y-2">
                          {msg.recommendations.map((rec, j) => (
                            <div key={j} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                              <div className="flex-1">
                                <p className="text-sm font-medium">{rec.name}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-sm font-bold text-brand-600">${rec.current_price?.toFixed(2)}</span>
                                  {rec.source && <Badge variant="info" className="text-[10px]">{rec.source}</Badge>}
                                  {rec.rating && <StarRating rating={rec.rating} size="sm" />}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200">
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
