import { useEffect, useRef, useState } from "react";

export function CounterOne() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const countRef = useRef(0);
  const rafRef = useRef(null);

  // Hardcoded counter configuration
  const end = 360;
  const duration = 2000;
  const suffix = "M+";
  const color = "text-green-500";
  const label = "Underserved Population";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const endValue = end;

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      countRef.current = Math.floor(progress * endValue);
      setCount(countRef.current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCounter);
      }
    };

    rafRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={counterRef} className="text-center p-4">
      <div className={`text-4xl md:text-5xl font-bold ${color}`}>
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base mt-2 text-gray-600">{label}</div>
    </div>
  );
}
