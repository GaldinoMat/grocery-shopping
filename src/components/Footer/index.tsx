import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F3F9FB] p-4">
      <section className="flex flex-col gap-4">
        <div className="border-b-2 pb-1 border-[#666666] max-w-[12.5rem]">
          <h4 className="text-[#414141] font-normal text-base">
            Popular categories
          </h4>
        </div>
        <div className='flex flex-wrap justify-between gap-3'>
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
