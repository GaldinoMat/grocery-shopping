import React from 'react';
import Search from '../../../../assets/Search.svg';

function HeaderSearchBar() {
  return (
    <form
      className="bg-[#F3F9FB] max-w-[25rem] md:w-80 lg:w-[32rem] h-10 rounded-lg flex p-3 items-center justify-center"
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
  );
}

export default HeaderSearchBar;
