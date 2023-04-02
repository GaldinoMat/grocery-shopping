import React, { type ReactNode } from 'react';

interface ShelfTitleProps {
  children: ReactNode;
}

function ShelfTitle({ children }: ShelfTitleProps) {
  return (
    <div className="border-b-2 pb-1 border-[#54B22C] max-w-[12.5rem]">
      <h3 className="text-[#666666] font-normal">{children}</h3>
    </div>
  );
}

export default ShelfTitle;
