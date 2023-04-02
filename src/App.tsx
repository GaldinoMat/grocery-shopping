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
      <main className="flex flex-col gap-7 py-5">
        <BannerHero />
        <RotatingShelf />
        <StaticShelf />
      </main>
      <Footer />
    </>
  );
}

export default App;
