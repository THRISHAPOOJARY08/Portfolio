import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'project' | 'link'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorType('default');
        return;
      }

      if (target.closest('[data-cursor="project"]')) {
        setCursorType('project');
      } else if (target.closest('button, [role="button"]')) {
        setCursorType('button');
      } else if (target.closest('a')) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Center luminous micro-dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorType === 'project'
              ? 'w-2 h-2 bg-cyan-300 shadow-[0_0_12px_#38bdf8]'
              : cursorType === 'button'
              ? 'w-1.5 h-1.5 bg-white shadow-[0_0_8px_#ffffff]'
              : cursorType === 'link'
              ? 'w-2 h-2 bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
              : 'w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#38bdf8]'
          }`}
        />
      </div>

      {/* Surrounding reactive ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            cursorType === 'project'
              ? 'w-16 h-16 border border-cyan-400/60 bg-cyan-950/40 backdrop-blur-xs scale-100'
              : cursorType === 'button'
              ? 'w-10 h-10 border border-white/40 bg-white/5 scale-100'
              : cursorType === 'link'
              ? 'w-8 h-8 border border-cyan-400/30 bg-cyan-500/10 scale-100'
              : 'w-6 h-6 border border-white/20 bg-transparent scale-75 opacity-60'
          }`}
        >
          {cursorType === 'project' && (
            <span className="text-[9px] font-mono tracking-wider font-semibold text-cyan-200 uppercase">
              VIEW
            </span>
          )}
        </div>
      </div>
    </>
  );
};
