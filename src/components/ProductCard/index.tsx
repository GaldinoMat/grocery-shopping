import React, { useState } from 'react';
import FavLogo from './components/FavLogo';

interface ProductCardProps {
  productInfo: {
    name: string;
    image: string;
    price: number;
  };
  isFull?: boolean;
}

function ProductCard({ productInfo, isFull = false }: ProductCardProps) {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div
      className={`relative ${
        isFull ? 'w-full' : 'w-32 md:w-56'
      } flex-none border border-[#EDEDED] rounded-2xl`}
    >
      <FavLogo />
      <img
        src={productInfo.image}
        alt="Product image example"
        className="w-full"
      />
      <hr className='w-11/12 mx-auto' />
      <div className="flex flex-col gap-3 md:gap-4 py-2 md:py-3 px-3 md:px-4">
        <div className="text-xs font-normal md:text-base">
          {productInfo.name}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs md:text-xl">R$ {productInfo.price}</div>
          </div>
          <button
            onClick={() => {
              setisClicked(!isClicked);
            }}
            className={`text-xs ${
              isClicked
                ? 'bg-[#54B22C] text-[#F3F9FB]'
                : 'bg-[#F3F9FB] text-[#54B22C] hover:text-[#F3F9FB] hover:bg-[#54B22C]'
            }  px-2 md:px-5 py-1 md:py-[.375rem] border  border-[#54B22C] rounded-md transition-colors`}
          >
            {isClicked ? 'ADDED!' : 'ADD'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
