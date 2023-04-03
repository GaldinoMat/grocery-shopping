import React from 'react';
import Logo from '../Logo';
import Socials from './components/Socials';

function Footer() {
  return (
    <footer className="bg-[#F3F9FB] p-4">
      <section className="flex flex-col gap-8 md:gap-5 md:px-0 md:max-w-2xl lg:max-w-6xl md:mx-auto">
        <div className="flex flex-col md:flex-row gap-7 md:justify-between lg:justify-start lg:gap-40">
          <div className="flex flex-col gap-7">
            <Logo />
            <div className="hidden md:block">
              <Socials />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="border-b-2 pb-1 border-[#666666] max-w-[12.5rem]">
              <h4 className="text-[#414141] font-normal text-base md:text-xl">
                Popular categories
              </h4>
            </div>
            <div className="flex flex-col justify-between gap-3 md:gap-6">
              {[
                'Fruits & Vegetables',
                'Dairy & Breakfasts',
                'Egg, Meat & Fish',
                'Bath & Body',
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="border-b-2 pb-1 border-[#666666] max-w-[12.5rem]">
              <h4 className="text-[#414141] font-normal text-base md:text-xl">
                Customer Services
              </h4>
            </div>
            <div className="flex flex-col justify-between gap-3 md:gap-6">
              {['About us', 'Terms & Conditions', 'FAQ', 'Privacy Policy'].map(
                (item, index) => (
                  <p key={index}>{item}</p>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto md:hidden">
          <Socials />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
