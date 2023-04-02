import React from 'react';
import Carroussel from '../Carroussel';
import ProductCard from '../ProductCard';
import { mockDataArr } from '../utils/mockProducts';
import ShelfTitle from '../ShelfTitle';

function RotatingShelf() {
  return (
    <section className="px-4 flex flex-col gap-4">
      <ShelfTitle>
        Shop from <span className="text-[#54B22C]">Top Categories</span>
      </ShelfTitle>
      <Carroussel>
        {mockDataArr.map((product, index) => (
          <ProductCard productInfo={product} key={index} />
        ))}
      </Carroussel>
    </section>
  );
}

export default RotatingShelf;
