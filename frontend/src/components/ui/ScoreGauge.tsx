import { cn } from "@/lib/utils"

interface ScoreGaugeProps {
  score: number
  label: string
  size?: "sm" | "md"
}

export function ScoreGauge({ score, label, size = "sm" }: ScoreGaugeProps) {
  const color = score >= 80 ? "text-green-600" : score >= 60 ? "text-yellow-600" : "text-red-600"
  const bgColor = score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500"

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className={cn("text-gray-600", size === "sm" ? "text-xs" : "text-sm")}>{label}</span>
          <span className={cn("font-semibold", color, size === "sm" ? "text-xs" : "text-sm")}>{score}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className={cn("h-1.5 rounded-full transition-all duration-500", bgColor)} style={{ width: `${score}%` }} />
        </div>
      </div>
    </div>
  )
}
