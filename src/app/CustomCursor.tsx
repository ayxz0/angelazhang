'use client'
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e:any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed h-screen inset-0 transition duration-300 lg:absolute"
      style={{background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(12, 116, 173, 0.15), transparent 80%)`}}
    ></div>
  );
};

export default CustomCursor;
