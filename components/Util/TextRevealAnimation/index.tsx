import React from "react";
import { motion, Variants } from "framer-motion";

const sentenceVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const TextRevealAnimation = ({
  text,
  letterStyle,
  sentenceStyle,
  animationCompleteCallback,
  ...props
}: {
  text: string;
  animationCompleteCallback?: (...args: any[]) => void;
  sentenceStyle?: React.CSSProperties;
  letterStyle?: React.CSSProperties;
}) => {
  return (
    <motion.div
      onAnimationComplete={animationCompleteCallback}
      style={sentenceStyle}
      variants={sentenceVariant}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((letter: string, index: number) => {
        return (
          <motion.span
            style={letterStyle}
            key={letter + "-" + index}
            variants={letterVariant}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default TextRevealAnimation;
