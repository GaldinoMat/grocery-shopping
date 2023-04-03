import React from 'react';
import Carroussel from '../Carroussel';
import CategoryLink from './components/CategoryLink';
import HomeBanner from '../../assets/Offer Banner.svg';

function BannerHero() {
  const Banners = [HomeBanner, HomeBanner, HomeBanner, HomeBanner, HomeBanner];

  return (
    <section className="flex flex-col gap-4">
      <div className="px-4 md:px-0 md:mx-auto md:max-w-2xl">
        <Carroussel>
          {[
            'Fruits & Vegetables',
            'Dairy & Breakfasts',
            'Egg, Meat & Fish',
            'Bath & Body',
            'Cold drinks & Juices',
            'Snacks & Munchies',
          ].map((item, index) => (
            <CategoryLink link={item} key={index} />
          ))}
        </Carroussel>
      </div>
      <div>
        <Carroussel>
          {Banners.map((Banner, index) => (
            <img
              className="h-56 md:h-64 object-cover"
              src={Banner}
              alt="Example banner"
              key={index}
            />
          ))}
        </Carroussel>
      </div>
    </section>
  );
}

export default BannerHero;
