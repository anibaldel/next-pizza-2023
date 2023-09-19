"use client"
import { useState, useEffect } from "react";

const CountDown = ({ days, hours, minutes, seconds }:{ days:number, hours:number, minutes:number, seconds:number, }) => {
  const [delay, setDelay] = useState(days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay((prevDelay )=> prevDelay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay]);

  const d = Math.floor(delay / (24 * 60 * 60));
  const h = Math.floor((delay / (60 * 60)) % 24);
  const m = Math.floor((delay / 60) % 60);
  const s = Math.floor(delay % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;