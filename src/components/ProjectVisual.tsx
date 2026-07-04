"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectVisual({
  index,
  src,
}: {
  index: number;
  src: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      className="relative aspect-[4/3] bg-panel overflow-hidden border border-line group-hover:border-cyan/40 transition-colors rounded-lg"
    >
      <Image
        src={src}
        alt={`Project ${index}`}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" />
        <span className="font-mono text-[10px] text-signal">REC</span>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-cyan/80 bg-bg/50 px-1.5 py-0.5 rounded">
        CAM_{index.toString().padStart(2, "0")}
      </div>
    </motion.div>
  );
}