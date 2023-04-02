import React, { type ReactNode } from 'react';

interface ShelfTitleProps {
  children: ReactNode;
}

function ShelfTitle({ children }: ShelfTitleProps) {
  return (
    <div className="border-b-2 pb-1 border-[#54B22C] max-w-[15rem]">
      <h3 className="text-[#666666] font-normal text-lg">{children}</h3>
    </div>
  );
}

export default ShelfTitle;
