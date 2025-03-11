"use client"

import type React from "react"

interface IPhoneFrameProps {
  children: React.ReactNode
  color?: "black" | "white" | "gold" | "silver"
}

export function IPhoneFrame({ children, color = "black" }: IPhoneFrameProps) {
  // Frame colors based on device color
  const frameColors = {
    black: "bg-gray-800 border-gray-800",
    white: "bg-gray-100 border-gray-200",
    gold: "bg-amber-100 border-amber-200",
    silver: "bg-gray-200 border-gray-300",
  }

  return (
    <div
      className={`relative w-fit mx-auto ${frameColors[color]} border-[14px] rounded-[2.5rem]`}
    >
      {/* Frame Buttons - Left Side */}
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[72px] rounded-e-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[124px] rounded-e-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[178px] rounded-e-lg"></div>

      {/* Frame Buttons - Right Side */}
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[142px] rounded-s-lg"></div>

      {/* Content Container */}
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        {children}
      </div>
    </div>
  )
}

