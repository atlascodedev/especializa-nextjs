import React from "react";
import { motion, Variants } from "framer-motion";
import { InView } from "react-intersection-observer";

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
  triggerOnView,
  triggerOnce,
  threshold,
  staggerDelay = 0.08,
  ...props
}: {
  text: string;
  animationCompleteCallback?: (...args: any[]) => void;
  sentenceStyle?: React.CSSProperties;
  letterStyle?: React.CSSProperties;
  triggerOnView?: boolean;
  triggerOnce?: boolean;
  staggerDelay?: number;
  threshold?: number;
}) => {
  return (
    <React.Fragment>
      {triggerOnView ? (
        <InView threshold={threshold} triggerOnce={triggerOnce}>
          {({ entry, inView, ref }) => {
            return (
              <motion.div
                ref={ref}
                onAnimationComplete={animationCompleteCallback}
                style={sentenceStyle}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                      staggerChildren: staggerDelay,
                    },
                  },
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {text.split("").map((letter: string, index: number) => {
                  return (
                    <motion.span
                      style={letterStyle}
                      key={letter + "-" + index}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                        },
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </motion.div>
            );
          }}
        </InView>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default TextRevealAnimation;
