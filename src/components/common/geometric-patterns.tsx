"use client"

import { useId } from "react"

type PatternType = "hexagons" | "triangles" | "diamonds" | "squares" | "circles"

interface GeometricPatternProps {
  pattern?: PatternType
  color?: string
  opacity?: number
  scale?: number
  rotate?: number
  className?: string
}

export function GeometricPattern({
  pattern = "hexagons",
  color = "#f59e0b",
  opacity = 0.07,
  scale = 2,
  rotate = 0,
  className = "",
}: GeometricPatternProps) {
  const id = useId()

  const getPattern = () => {
    switch (pattern) {
      case "hexagons":
        return {
          width: 50,
          height: 43.4,
          path: "M25,17.3 L25,0 L0,8.7 L0,25.9 L25,34.6 L50,25.9 L50,8.7 Z",
        }
      case "triangles":
        return {
          width: 50,
          height: 43.4,
          path: "M25 0 L0 43.4 L50 43.4 Z",
        }
      case "diamonds":
        return {
          width: 50,
          height: 50,
          path: "M25,0 L50,25 L25,50 L0,25 Z",
        }
      case "squares":
        return {
          width: 50,
          height: 50,
          path: "M0,0 L0,50 L50,50 L50,0 Z",
        }
      case "circles":
        return {
          width: 50,
          height: 50,
          path: "M25,25 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0",
        }
      default:
        return {
          width: 50,
          height: 43.4,
          path: "M25,17.3 L25,0 L0,8.7 L0,25.9 L25,34.6 L50,25.9 L50,8.7 Z",
        }
    }
  }

  const { width, height, path } = getPattern()

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`pattern-${id}`}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternTransform={`scale(${scale}) rotate(${rotate})`}
          >
            <path d={path} fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pattern-${id})`} />
      </svg>
    </div>
  )
}

