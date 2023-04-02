import React, { useState } from 'react';
import ShelfTitle from '../ShelfTitle';
import { mockDataArr } from '../utils/mockProducts';
import ProductCard from '../ProductCard';

const SingleColumn = () => {
  return (
    <svg
      id="single-grid-active"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#54B22C"
    >
      <rect
        id="Retângulo_27"
        data-name="Retângulo 27"
        width="16"
        height="16"
      ></rect>
    </svg>
  );
};

const MultipleColumns = () => {
  return (
    <svg
      id="multiple-grid-active"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#54B22C"
    >
      <g id="Grupo_756" data-name="Grupo 756" transform="translate(-270 -709)">
        <rect
          id="Retângulo_28"
          data-name="Retângulo 28"
          width="7"
          height="7"
          transform="translate(270 709)"
        ></rect>
        <rect
          id="Retângulo_30"
          data-name="Retângulo 30"
          width="7"
          height="7"
          transform="translate(270 718)"
        ></rect>
        <rect
          id="Retângulo_29"
          data-name="Retângulo 29"
          width="7"
          height="7"
          transform="translate(279 709)"
        ></rect>
        <rect
          id="Retângulo_31"
          data-name="Retângulo 31"
          width="7"
          height="7"
          transform="translate(279 718)"
        ></rect>
      </g>
    </svg>
  );
};

function StaticShelf() {
  const [columns, setColumns] = useState(2);

  return (
    <section className="px-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <ShelfTitle>
          Check out our <span className="text-[#54B22C]">Top Produtcs</span>
        </ShelfTitle>
        <div className="flex gap-3">
          <button
            className="h-4"
            onClick={() => {
              setColumns(1);
            }}
          >
            <SingleColumn />
          </button>
          <button
            className="h-4"
            onClick={() => {
              setColumns(2);
            }}
          >
            <MultipleColumns />
          </button>
        </div>
      </div>
      <div className={`grid grid-cols-${columns} grid-flow-row gap-2`}>
        {mockDataArr.map((product, index) => (
          <ProductCard isFull productInfo={product} key={index} />
        ))}
      </div>
    </section>
  );
}

export default StaticShelf;
