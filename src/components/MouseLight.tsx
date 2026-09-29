import React, { useEffect, useState } from 'react';

export const MouseLight: React.FC = () => {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: -500, y: -500 });
  const [isNearInteractive, setIsNearInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, textarea, [data-interactive="true"]')
        );
        setIsNearInteractive(isInteractive);
      }
    };

    // Smooth lerp loop
    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setCoords({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden transition-opacity duration-500"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${coords.x - 300}px, ${coords.y - 300}px, 0)`,
          width: isNearInteractive ? '650px' : '550px',
          height: isNearInteractive ? '650px' : '550px',
          background: isNearInteractive
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(129, 140, 248, 0.04) 40%, transparent 70%)',
          filter: 'blur(35px)',
          opacity: coords.x < 0 ? 0 : 1,
        }}
      />
    </div>
  );
};
