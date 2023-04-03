import React from 'react';
import User from '../../../../assets/user.svg';
import Buy from '../../../../assets/Buy.svg';

function LoginCart() {
  return (
    <div className="flex gap-4">
      <div className="flex gap-2">
        <button>
          <img src={User} alt="Green user icon" className="w-5 h-5" />
        </button>
        <p className="hidden md:block text-[#666666]">Login</p>
      </div>
      <span className="border-l-[#D9D9D9] border h-6" />
      <div className="flex gap-2">
        <button>
          <img src={Buy} alt="Green shopping cart icon" className="w-5 h-5" />
        </button>
        <p className="hidden md:block text-[#666666]">Cart</p>
      </div>
    </div>
  );
}

export default LoginCart;
