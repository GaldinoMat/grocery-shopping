import React from 'react';
import FreshCart from '../../assets/Freshcart Logo.svg';

function Logo() {
  return (
    <div>
      <img
        src={FreshCart}
        alt="Green and Yellow freshcart logo"
        className="w-[8.75rem] h-10 md:w-40 md:h-9 lg:w-48"
      />
    </div>
  );
}

export default Logo;
