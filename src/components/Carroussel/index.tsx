import React, { type ReactNode, useRef } from 'react';

interface CarrousselProps {
  children: ReactNode;
  hide?: boolean;
}

function Carroussel({ children, hide = true }: CarrousselProps) {
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
    <>
      {!hide && (
        <button
          onClick={() => {
            handleClick('left');
          }}
        >
          Left
        </button>
      )}
      <div
        className="flex overflow-x-auto scroll-smooth h-auto gap-2 no-scrollbar"
        ref={dragSlider}
      >
        {children}
      </div>
      {!hide && (
        <button
          onClick={() => {
            handleClick('right');
          }}
        >
          Right
        </button>
      )}
    </>
  );
}

export default Carroussel;
