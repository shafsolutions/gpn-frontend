import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedNumberProps = {
  target: number;
  duration?: number;
};

const AnimatedNumber = ({ target, duration = 1000 }: AnimatedNumberProps) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = Date.now();
      let animationFrame: number;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - start;

        if (elapsed < duration) {
          const random = Math.floor(Math.random() * target * 2);
          setDisplayedNumber(random);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayedNumber(target);
          cancelAnimationFrame(animationFrame);
          setHasAnimated(true);
        }
      };

      animate();

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, target, duration, hasAnimated]);

  return (
    <span ref={ref}>{displayedNumber.toLocaleString()}</span>
  );
};

export default AnimatedNumber;
