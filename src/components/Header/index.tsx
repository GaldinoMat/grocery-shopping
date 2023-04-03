import React from 'react';
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';

function Header() {
  return (
    <header className="w-full flex flex-col gap-3">
      <section className="w-full bg-[#F8CB47] text-[#666666] font-semibold text-sm">
        <div className="w-full px-4 md:px-0 md:max-w-2xl md:mx-auto py-3">Delivery in 10 minutes</div>
      </section>
      <section className="px-4">
        <MobileHeader />
        <DesktopHeader />
      </section>
    </header>
  );
}

export default Header;
