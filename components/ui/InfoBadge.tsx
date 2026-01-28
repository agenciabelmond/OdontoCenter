type InfoBadgeProps = {
  icon: string
  value: string
  label: string
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function InfoBadge({
  icon,
  value,
  label,
  position = "top-left",
}: InfoBadgeProps) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  }

  return (
    <div
      className={`absolute z-10 ${positionClasses[position]}
      rounded-xl bg-white px-4 py-2 shadow-lg`}
    >
      <div className="text-sm font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}