import React, { type ReactNode } from 'react';

interface ShelfTitleProps {
  children: ReactNode;
}

function ShelfTitle({ children }: ShelfTitleProps) {
  return (
    <div className="border-b-2 pb-1 md:pb-3 lg:pb-4 border-[#54B22C] max-w-[15rem] md:max-w-none md:w-[18rem] lg:w-[20rem]">
      <h3 className="text-[#666666] font-normal text-lg md:text-xl lg:text-2xl">
        {children}
      </h3>
    </div>
  );
}

export default ShelfTitle;
