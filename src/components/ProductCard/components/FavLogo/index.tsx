import React, { useState } from 'react';

function FavLogo() {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div className="absolute top-1 right-1">
      <button
        onClick={() => {
          setisClicked(!isClicked);
        }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isClicked
              ? 'fill-[#54B22C]'
              : 'fill-transparent hover:fill-[#54B22C]'
          } transition-colors w-7 h-7 md:w-9 md:h-9`}
        >
          <g id="Interface / Heart_01">
            <path
              id="Vector"
              d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
              stroke="#54B22C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default FavLogo;
