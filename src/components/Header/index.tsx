import React from 'react';
import FreshCart from '../../assets/Freshcart Logo.svg';
import Search from '../../assets/Search.svg';
import User from '../../assets/user.svg';
import Buy from '../../assets/Buy.svg';

function Header() {
  return (
    <header className="w-full flex flex-col gap-3">
      <section className="w-full bg-[#F8CB47] px-4">
        Delivery in 10 minutes
      </section>
      <section className="px-4">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div>
              <img
                src={FreshCart}
                alt="Green and Yellow freshcart logo"
                className="w-[6.75rem] h-5"
              />
            </div>
            <div className="flex gap-4">
              <button>
                <img src={User} alt="Green user icon" className="w-5 h-5" />
              </button>
              <button>
                <img
                  src={Buy}
                  alt="Green shopping cart icon"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div>
            <form
              className="bg-[#F3F9FB] max-w-[25rem] h-10 rounded-lg flex p-3 items-center justify-center"
              action=""
            >
              <button>
                <img
                  src={Search}
                  alt="Green magnifying glass icon"
                  className="w-5 h-5"
                />
              </button>
              <input
                className="bg-[#F3F9FB] w-full ml-2 placeholder:text-sm placeholder:text-[#666666] placeholder:font-normal text-[#666666]"
                type="text"
                placeholder="Search essentials, groceries and more..."
              />
            </form>
          </div>
        </div>
        <div></div>
      </section>
    </header>
  );
}

export default Header;
