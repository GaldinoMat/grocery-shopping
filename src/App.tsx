import React from 'react';
import Header from './components/Header';
import BannerHero from './components/BannerHero';
import StaticShelf from './components/Shelf';
import RotatingShelf from './components/RotatingShelf';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-7 md:gap-14 py-5 md:py-7 lg:py-9">
        <BannerHero />
        <RotatingShelf />
        <StaticShelf />
      </main>
      <Footer />
    </>
  );
}

export default App;
