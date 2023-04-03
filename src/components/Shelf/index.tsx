import React, { useEffect, useState } from 'react';
import ShelfTitle from '../ShelfTitle';
import { mockDataArr } from '../utils/mockProducts';
import ProductCard from '../ProductCard';
import { MultipleColumns, SingleColumn } from './components/SVGS';
import { useIsMobile } from './hooks/useIsMobile';

function StaticShelf() {
  const [columns, setColumns] = useState(2);

  const { isMobile, isDesktop, isTablet } = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      columns === 3 ? setColumns(2) : setColumns(1);
    }
    if (isTablet) {
      columns === 2 || columns === 4 ? setColumns(3) : setColumns(2);
    }
    if (isDesktop) {
      columns === 3 ? setColumns(4) : setColumns(3);
    }
  }, [isMobile, isDesktop, isTablet]);

  return (
    <section className="px-4 flex flex-col gap-4 md:px-0 md:mx-auto md:w-[42rem] lg:max-w-6xl lg:w-full">
      <div className="flex justify-between items-center">
        <ShelfTitle>
          Check out our <span className="text-[#54B22C]">Top Products</span>
        </ShelfTitle>
        <div className="flex gap-3">
          <button
            className="h-4"
            onClick={() => {
              setColumns(() => {
                if (isTablet) return 2;
                if (isDesktop) return 3;

                return 1;
              });
            }}
          >
            <SingleColumn />
          </button>
          <button
            className="h-4"
            onClick={() => {
              setColumns(() => {
                if (isTablet) return 3;
                if (isDesktop) return 4;

                return 2;
              });
            }}
          >
            <MultipleColumns />
          </button>
        </div>
      </div>
      <div
        // this class was written this way due to a tailwind's limitation on string interpolation
        className={`grid ${
          columns === 2
            ? 'grid-cols-2'
            : columns === 3
            ? 'grid-cols-3'
            : columns === 4
            ? 'grid-cols-4'
            : 'grid-cols-1'
        } gap-2`}
      >
        {mockDataArr.map((product, index) => (
          <ProductCard isFull productInfo={product} key={index} />
        ))}
      </div>
    </section>
  );
}

export default StaticShelf;
