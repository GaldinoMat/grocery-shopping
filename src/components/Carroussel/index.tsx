import React, { type ReactNode, useRef } from 'react';

interface CarrousselProps {
  children: ReactNode;
  hide?: boolean;
  gap?: boolean;
}

function Carroussel({ children, hide = true, gap = true }: CarrousselProps) {
  const dragSlider = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    const { current } = dragSlider;

    if (current !== null) {
      if (direction === 'left') {
        current.scrollLeft -= current.offsetWidth;
      } else {
        current.scrollLeft += current.offsetWidth;
      }
    }
  };

  return (
    <div className="relative">
      {!hide && (
        <button
          className="hidden lg:block absolute top-1/2 left-5 bg-[#F3F9FB] h-12 rounded-full px-3 text-3xl"
          onClick={() => {
            handleClick('left');
          }}
        >
          ←
        </button>
      )}
      <div
        className={`flex overflow-x-auto scroll-smooth h-auto ${
          gap ? 'gap-2 md:gap-3' : ''
        } no-scrollbar`}
        ref={dragSlider}
      >
        {children}
      </div>
      {!hide && (
        <button
          className="hidden lg:block absolute top-1/2 right-5 bg-[#F3F9FB] h-12 rounded-full px-3 text-3xl"
          onClick={() => {
            handleClick('right');
          }}
        >
          →
        </button>
      )}
    </div>
  );
}

export default Carroussel;
