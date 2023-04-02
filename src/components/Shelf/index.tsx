import React from 'react';
import ShelfTitle from '../ShelfTitle';
import { mockDataArr } from '../utils/mockProducts';
import ProductCard from '../ProductCard';

function StaticShelf() {
  return (
    <section className="px-4 flex flex-col gap-4">
      <ShelfTitle>
        Check out our <span className="text-[#54B22C]">Top Produtcs</span>
      </ShelfTitle>
      <div className='grid grid-cols-2 grid-flow-row gap-2'>
        {mockDataArr.map((product, index) => (
          <ProductCard isFull productInfo={product} key={index} />
        ))}
      </div>
    </section>
  );
}

export default StaticShelf;
