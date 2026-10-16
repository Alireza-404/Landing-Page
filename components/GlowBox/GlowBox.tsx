"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

const GlowBox = ({
  children,
  aos,
  className,
}: {
  children: React.ReactNode;
  aos?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, (value) => value - 125);
  const glowY = useTransform(mouseY, (value) => value - 125);

  const borderGlow = useMotionTemplate`
    radial-gradient(
      circle at ${mouseX}px ${mouseY}px,
      #00ffb4cc,
      transparent 65%
    )
  `;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      className={`group relative w-full p-px overflow-hidden bg-[#242424] rounded-lg ${
        className || ""
      }`}
      data-aos={aos}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"
        style={{
          background: borderGlow,
        }}
      />

      <div className="relative z-20 w-full h-full bg-[#001102] rounded-lg">
        <motion.div
          className="pointer-events-none absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"
          style={{
            left: glowX,
            top: glowY,
            width: 250,
            height: 250,
            background: "radial-gradient(circle, #0b6322e7, #167930e7)",
            filter: "blur(250px)",
          }}
        />

        {children}
      </div>
    </div>
  );
};

export default GlowBox;
