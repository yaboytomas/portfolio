"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Optimize by memoizing the component to prevent re-renders
export const TextGenerateEffect = memo(({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  // Use a single ref for both the container and animation scope
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [height, setHeight] = useState<number | null>(null);

  // Precompute words array
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && !hasAnimated && scope.current) {
      // Calculate initial height to prevent layout shifts
      if (scope.current && !height) {
        const scopeElement = scope.current as HTMLElement;
        setHeight(scopeElement.offsetHeight);
      }

      // Make sure spans have been rendered before animating
      const spans = scope.current.querySelectorAll('span');
      
      if (spans.length > 0) {
        animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 0.04,
            delay: stagger(0.04),
            ease: "easeInOut",
          }
        );
        setHasAnimated(true);
      }
    }
  }, [isInView, animate, hasAnimated, height, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div 
            ref={scope} 
            className={className}
            style={{ minHeight: height ? `${height}px` : '50px' }}
          >
            {wordsArray.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                className="dark:text-white text-black"
                initial={{ opacity: 0 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});
