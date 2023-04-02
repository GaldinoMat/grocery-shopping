import React, { useState } from 'react';
import FavLogo from './FavLogo';

interface ProductCardProps {
  productInfo: {
    name: string;
    image: string;
    price: number;
  };
}

function ProductCard({ productInfo }: ProductCardProps) {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div className="relative w-32 pb-2 flex-none border border-[#EDEDED] rounded-2xl">
      <FavLogo />
      <img
        src={productInfo.image}
        alt="Product image example"
        className="w-full"
      />
      <div className="flex flex-col gap-3 px-3">
        <div className="text-xs font-normal">{productInfo.name}</div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs">R$ {productInfo.price}</div>
          </div>
          <button
            onClick={() => {
              setisClicked(!isClicked);
            }}
            className={`text-xs ${
              isClicked
                ? 'bg-[#54B22C] text-[#F3F9FB]'
                : 'bg-[#F3F9FB] text-[#54B22C] hover:text-[#F3F9FB] hover:bg-[#54B22C]'
            }  px-2 py-1 border  border-[#54B22C] rounded-md transition-colors`}
          >
            {isClicked ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
