"use client";

import React, { useState, useEffect } from "react";
import { Pause } from "lucide-react";
import pauseSVG from "@/assests/images/svg/pause.svg";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const strokeWidth = 14;
  const radius = 120 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (seconds / 60) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds >= 60 ? 0 : prevSeconds + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return [
      minutes.toString().padStart(2, "0"),
      remainingSeconds.toString().padStart(2, "0"),
    ];
  };

  const [minutes, remainingSeconds] = formatTime(seconds);

  return (
    <div className="p-10 w-[454px] h-min relative ">
      <svg
        className="progress-ring "
        width={radius * 2 + strokeWidth}
        height={radius * 2 + strokeWidth}
      >
        <circle
          stroke="#1E1E24"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
        <circle
          className="progress-ring__circle"
          stroke="#FAFAFA"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: strokeDashoffset,
            transition: "stroke-dashoffset 1s linear",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />

        <text
          x="50%"
          y="30%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#7F7F8D"
          fontSize="12px"
          fontFamily="Poppins, Arial, sans-serif"
        >
          <tspan fontWeight="regular">Pomodoro</tspan>
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={seconds > 0 ? "#FAFAFA" : "#1E1E24"}
          fontSize="48px"
          fontFamily="Poppins, Arial, sans-serif"
        >
          <tspan fontWeight="bold">{minutes}</tspan>
          <tspan fontWeight="bold">:</tspan>
          <tspan fontWeight="normal">{remainingSeconds}</tspan>
        </text>
        <svg
          x="43%"
          y="70%"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fafafa"
          stroke-width="0.9375"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="4" height="16" x="6" y="4" />
          <rect width="4" height="16" x="14" y="4" />
        </svg>
      </svg>
    </div>
  );
}
