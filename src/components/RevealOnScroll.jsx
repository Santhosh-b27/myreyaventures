import React, { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 750,
  threshold = 0.15,
  once = true,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, once]);

  // Compute initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 45px, 0)';
      case 'down':
        return 'translate3d(0, -45px, 0)';
      case 'left':
        return 'translate3d(45px, 0, 0)';
      case 'right':
        return 'translate3d(-45px, 0, 0)';
      case 'zoom-in':
        return 'scale(0.92) translate3d(0, 20px, 0)';
      case 'tilt-3d':
        return 'perspective(1000px) rotateX(15deg) translate3d(0, 30px, 0)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const getVisibleTransform = () => {
    if (direction === 'tilt-3d') {
      return 'perspective(1000px) rotateX(0deg) translate3d(0, 0, 0)';
    }
    return 'translate3d(0, 0, 0) scale(1)';
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? getVisibleTransform() : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
    ...style
  };

  return (
    <div ref={domRef} className={className} style={animationStyle}>
      {children}
    </div>
  );
}

// Container helper to stagger children automatically
export function RevealGroup({ children, stagger = 100, direction = 'up', className = '' }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <RevealOnScroll direction={direction} delay={index * stagger}>
            {child}
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
