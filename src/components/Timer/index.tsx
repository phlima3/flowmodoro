"use client";

import React, { useState, useEffect } from "react";
import { Clock, Pause, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TIMER_STATUS = {
  PAUSE: "Pausar",
  START: "Iniciar",
  CONTINUE: "Continuar",
};

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState(TIMER_STATUS.START);
  const [isActive, setIsActive] = useState(false);

  const strokeWidth = 14;
  const radius = 120 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (seconds / 60) * circumference;

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds >= 60 ? 0 : prevSeconds + 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

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
    <div className="p-10 w-[454px] h-min flex flex-col items-center justify-center ">
      <div className="flex items-center gap-4 w-full  justify-start">
        <Clock size={24} color="#fff" />

        <div>
          <h2 className="text-off_white font-semibold size-6">Timer</h2>
          <span className="text-placeholder font-normal size-4">
            O tempo é seu maior aliado.
          </span>
        </div>
      </div>

      <Separator
        orientation="horizontal"
        className="my-8"
        style={{
          color: "#1E1E24",
        }}
      />

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

        {isActive && (
          <svg
            x="43%"
            y="70%"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fafafa"
            strokeWidth="0.9375"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="4" height="16" x="6" y="4" />
            <rect width="4" height="16" x="14" y="4" />
          </svg>
        )}
      </svg>

      <div className="flex flex-col gap-4 items-center mt-8 w-full">
        <button
          className="flex items-center justify-center w-full h-12 bg-off_white rounded-md text-button_dark font-semibold size-4 transition-all duration-300 ease-in-out hover:bg-[#E5E5E5] hover:text-button_light"
          onClick={() => {
            setIsActive(!isActive);
            setStatus(
              isActive
                ? TIMER_STATUS.PAUSE
                : seconds > 0
                ? TIMER_STATUS.CONTINUE
                : TIMER_STATUS.START
            );
          }}
        >
          {isActive ? (
            <Pause size={24} color="#09090B" />
          ) : (
            <Play size={24} color="#09090B" />
          )}
          {isActive
            ? TIMER_STATUS.PAUSE
            : seconds > 0
            ? TIMER_STATUS.CONTINUE
            : TIMER_STATUS.START}
        </button>
      </div>
    </div>
  );
}
