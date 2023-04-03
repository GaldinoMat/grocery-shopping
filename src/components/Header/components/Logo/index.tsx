import React from 'react';
import FreshCart from '../../../../assets/Freshcart Logo.svg';

function Logo() {
  return (
    <div>
      <img
        src={FreshCart}
        alt="Green and Yellow freshcart logo"
        className="w-[6.75rem] h-5 md:w-40 md:h-9"
      />
    </div>
  );
}

export default Logo;
