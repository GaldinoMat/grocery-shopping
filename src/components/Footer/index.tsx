import React from 'react';
import Logo from '../Header/components/Logo';

function Footer() {
  return (
    <footer className="bg-[#F3F9FB] p-4">
      <section className="flex flex-col gap-4 md:gap-5 md:px-0 md:max-w-2xl lg:max-w-6xl md:mx-auto">
        <Logo />
        <div className="border-b-2 pb-1 border-[#666666] max-w-[12.5rem]">
          <h4 className="text-[#414141] font-normal text-base md:text-xl">
            Popular categories
          </h4>
        </div>
        <div className="flex flex-wrap md:flex-col justify-between gap-3 md:gap-6">
          {[
            'Fruits & Vegetables',
            'Dairy & Breakfasts',
            'Egg, Meat & Fish',
            'Bath & Body',
          ].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
