import React, { useEffect, useState } from 'react';
import ShelfTitle from '../ShelfTitle';
import { mockDataArr } from '../utils/mockProducts';
import ProductCard from '../ProductCard';
import { MultipleColumns, SingleColumn } from './components/SVGS';
import { useIsMobile } from './hooks/useIsMobile';

function StaticShelf() {
  const [columns, setColumns] = useState(2);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      columns === 2 ? setColumns(3) : setColumns(2);
    } else {
      columns === 3 ? setColumns(2) : setColumns(1);
    }
  }, [isMobile]);

  return (
    <section className="px-4 flex flex-col gap-4 md:px-0 md:mx-auto md:w-[42rem]">
      <div className="flex justify-between items-center">
        <ShelfTitle>
          Check out our <span className="text-[#54B22C]">Top Products</span>
        </ShelfTitle>
        <div className="flex gap-3">
          <button
            className="h-4"
            onClick={() => {
              setColumns(isMobile ? 1 : 2);
            }}
          >
            <SingleColumn />
          </button>
          <button
            className="h-4"
            onClick={() => {
              setColumns(isMobile ? 2 : 3);
            }}
          >
            <MultipleColumns />
          </button>
        </div>
      </div>
      <div className={`grid grid-cols-${columns} gap-2`}>
        {mockDataArr.map((product, index) => (
          <ProductCard isFull productInfo={product} key={index} />
        ))}
      </div>
    </section>
  );
}

export default StaticShelf;
