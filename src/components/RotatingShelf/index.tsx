import React from 'react';
import Carroussel from '../Carroussel';
import ProductCard from '../ProductCard';
import { mockDataArr } from '../utils/mockProducts';

function RotatingShelf() {
  return (
    <section className="px-4 flex flex-col gap-4">
      <div className='border-b-2 pb-1 border-[#54B22C] max-w-[12.5rem]'>
        <h3 className="text-[#666666]">
          Shop from <span className="text-[#54B22C]">Top Categories</span>
        </h3>
      </div>
      <Carroussel>
        {mockDataArr.map((product, index) => (
          <ProductCard productInfo={product} key={index} />
        ))}
      </Carroussel>
    </section>
  );
}

export default RotatingShelf;
