import React from 'react';

interface CategoryLinkProps {
  link: string;
}

function CategoryLink({ link }: CategoryLinkProps) {
  return (
    <div className="min-w-[9rem] md:w-[10rem] h-10 bg-[#F3F9FB] rounded-lg px-3 text-sm flex items-center justify-center">
      <p className='whitespace-nowrap'>{link}</p>
    </div>
  );
}

export default CategoryLink;
