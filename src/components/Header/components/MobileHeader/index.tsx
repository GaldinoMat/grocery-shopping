import React from 'react';
import HeaderSearchBar from '../HeaderSearchBar';
import Logo from '../Logo';
import LoginCart from '../LoginCart';

function MobileHeader() {
  return (
    <div className="flex md:hidden flex-col gap-5">
      <div className="flex justify-between items-center">
        <Logo />
        <LoginCart />
      </div>
      <div>
        <HeaderSearchBar />
      </div>
    </div>
  );
}

export default MobileHeader;
