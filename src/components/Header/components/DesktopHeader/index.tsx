import React from 'react';
import HeaderSearchBar from '../HeaderSearchBar';
import Logo from '../Logo';
import LoginCart from '../LoginCart';

function DesktopHeader() {
  return (
    <div className="hidden md:flex gap-5 md:px-0 md:mx-auto md:max-w-2xl lg:max-w-6xl">
      <div className="w-full flex justify-between items-center">
        <Logo />
        <div>
          <HeaderSearchBar />
        </div>
        <LoginCart />
      </div>
    </div>
  );
}

export default DesktopHeader;
