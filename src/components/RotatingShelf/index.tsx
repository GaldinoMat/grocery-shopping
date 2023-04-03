import React from 'react';
import Carroussel from '../Carroussel';
import ProductCard from '../ProductCard';
import { mockDataArr } from '../utils/mockProducts';
import ShelfTitle from '../ShelfTitle';

function RotatingShelf() {
  return (
    <section className="px-4 flex flex-col gap-4 md:px-0 md:mx-auto md:max-w-2xl lg:max-w-6xl">
      <ShelfTitle>
        Shop from <span className="text-[#54B22C]">Top Categories</span>
      </ShelfTitle>
      <Carroussel hide={false}>
        {mockDataArr.map((product, index) => (
          <ProductCard productInfo={product} key={index} />
        ))}
      </Carroussel>
    </section>
  );
}

export default RotatingShelf;
