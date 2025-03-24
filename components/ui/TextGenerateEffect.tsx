"use client";

import { useEffect, useState, memo } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Create component before memoizing to add display name
const TextGenerateEffectComponent = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Precompute words array
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Only run animation once when in view
    if (isInView && !hasAnimated && scope.current) {
      let isMounted = true;
      
      // Use requestAnimationFrame to ensure DOM is ready
      const animationFrame = requestAnimationFrame(() => {
        if (!isMounted) return;
        
        const spans = scope.current?.querySelectorAll('span');
        
        if (spans && spans.length > 0) {
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
      });
      
      return () => {
        isMounted = false;
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, animate, hasAnimated, scope]);

  return (
    <div className={cn("font-bold", className || "")}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div 
            ref={scope}
            className={className}
            style={{ minHeight: '50px' }}
          >
            {wordsArray.map((word, idx) => (
              <motion.span
                key={`word-${idx}`}
                className={`${idx > 3 ? "text-purple" : "dark:text-white text-black"}`}
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
};

// Memoize the component and export with display name
export const TextGenerateEffect = memo(TextGenerateEffectComponent);
// Add display name
TextGenerateEffect.displayName = "TextGenerateEffect";
