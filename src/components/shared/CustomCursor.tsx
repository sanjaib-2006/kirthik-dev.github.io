import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        target.style.cursor === 'pointer'
      );
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  );
}