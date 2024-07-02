'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="p-3 rounded-2xl md:p-7 bg-gray-950 ring-2 group-hover:group-even:ring-amber-400 group-hover:group-odd:ring-violet-600 relative z-20 transition-all duration-500 cursor-pointer">
            <div className="hover:animate-pulse">
              <div className="flex justify-center">
                <Image 
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="object-contain opacity-100 md:scale-150"
                />
              </div>
              <p className="mt-2 text-sm text-gray-300 font-semibold text-center opacity-100 md:mt-3 md:text-lg">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};