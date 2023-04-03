import React from 'react';
import Youtube from '../../../../assets/carbon_logo-youtube.svg';
import Instagram from '../../../../assets/ph_instagram-logo.svg';
import Facebook from '../../../../assets/ri_facebook-fill.svg';

function Socials() {
  return (
    <div className="flex gap-4">
      <button>
        <img src={Youtube} alt="green youtube logo" className="w-8 h-8" />
      </button>
      <button>
        <img src={Instagram} alt="green instagram logo" className="w-8 h-8" />
      </button>
      <button>
        <img src={Facebook} alt="green facebook logo" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Socials;
