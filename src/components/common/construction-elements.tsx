"use client"
import { useId } from "react"

interface ConstructionElementsProps {
  className?: string
  opacity?: number
  color?: string
  accentColor?: string
}

export function ConstructionElements({
  className = "",
  opacity = 0.05,
  color = "#000000",
  accentColor = "#f59e0b",
}: ConstructionElementsProps) {
  const id = useId()

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" viewBox="0 0 1900 1050" xmlns="http://www.w3.org/2000/svg">
        {/* Blueprint Lines */}
        <defs>
          <pattern id={`blueprint-${id}`} width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke={color} strokeWidth="0.5" />
            <path d="M 25 0 L 25 100" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2,2" />
            <path d="M 50 0 L 50 100" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2,2" />
            <path d="M 75 0 L 75 100" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2,2" />
            <path d="M 0 25 L 100 25" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2,2" />
            <path d="M 0 50 L 100 50" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2,2" />
            <path d="M 0 75 L 100 75" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#blueprint-${id})`} />

        {/* Compass */}
        <g transform="translate(150, 150) scale(0.8)">
          <circle cx="0" cy="0" r="80" fill="none" stroke={color} strokeWidth="1" />
          <path d="M0,-80 L0,80" stroke={color} strokeWidth="1" />
          <path d="M-80,0 L80,0" stroke={color} strokeWidth="1" />
          <path d="M0,0 L50,-50" stroke={accentColor} strokeWidth="2" />
          <path d="M0,0 L-40,40" stroke={color} strokeWidth="1.5" />
          <text x="85" y="5" fontSize="12" fill={color}>
            E
          </text>
          <text x="-90" y="5" fontSize="12" fill={color}>
            W
          </text>
          <text x="0" y="-85" fontSize="12" fill={color}>
            N
          </text>
          <text x="0" y="95" fontSize="12" fill={color}>
            S
          </text>
        </g>

        {/* Building Plans */}
        <g transform="translate(700, 200) scale(0.8)">
          <rect x="-100" y="-100" width="200" height="200" fill="none" stroke={color} strokeWidth="1" />
          <rect
            x="-80"
            y="-80"
            width="160"
            height="160"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            strokeDasharray="5,2"
          />
          <line x1="-100" y1="-100" x2="100" y2="100" stroke={color} strokeWidth="0.3" />
          <line x1="100" y1="-100" x2="-100" y2="100" stroke={color} strokeWidth="0.3" />
          <circle cx="0" cy="0" r="30" fill="none" stroke={accentColor} strokeWidth="1" />
          <rect x="-90" y="-40" width="30" height="20" fill="none" stroke={color} strokeWidth="0.5" />
          <rect x="60" y="-40" width="30" height="20" fill="none" stroke={color} strokeWidth="0.5" />
          <rect x="-90" y="20" width="30" height="20" fill="none" stroke={color} strokeWidth="0.5" />
          <rect x="60" y="20" width="30" height="20" fill="none" stroke={color} strokeWidth="0.5" />
        </g>

        {/* Ruler */}
        <g transform="translate(200, 700) rotate(-5)">
          <rect x="0" y="0" width="400" height="20" fill="none" stroke={color} strokeWidth="1" />
          {Array.from({ length: 40 }).map((_, i) => (
            <line
              key={`tick-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2={i % 10 === 0 ? "15" : i % 5 === 0 ? "10" : "5"}
              stroke={i % 10 === 0 ? accentColor : color}
              strokeWidth={i % 10 === 0 ? "1" : "0.5"}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <text key={`label-${i}`} x={i * 100 + 5} y="35" fontSize="10" fill={accentColor}>
              {i * 10}
            </text>
          ))}
        </g>

        {/* Protractor */}
        <g transform="translate(800, 700)">
          <path d="M0,0 A100,100 0 1,1 0,-0.01" fill="none" stroke={color} strokeWidth="1" />
          {Array.from({ length: 37 }).map((_, i) => {
            const angle = i * 10
            const radian = (angle * Math.PI) / 180
            const length = angle % 30 === 0 ? 15 : angle % 10 === 0 ? 10 : 5
            return (
              <line
                key={`angle-${i}`}
                x1={100 * Math.cos(radian)}
                y1={100 * Math.sin(radian)}
                x2={(100 - length) * Math.cos(radian)}
                y2={(100 - length) * Math.sin(radian)}
                stroke={angle % 30 === 0 ? accentColor : color}
                strokeWidth={angle % 30 === 0 ? "1" : "0.5"}
              />
            )
          })}
          {Array.from({ length: 7 }).map((_, i) => {
            const angle = i * 30
            const radian = (angle * Math.PI) / 180
            return (
              <text
                key={`angle-label-${i}`}
                x={80 * Math.cos(radian) - 10}
                y={80 * Math.sin(radian) + 5}
                fontSize="10"
                fill={accentColor}
              >
                {angle}°
              </text>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

