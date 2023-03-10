import React from 'react'
import Ellipse95 from '../assets/images/Ellipse95.png';
import unsplashE8Ufcyxz5142 from '../assets/images/unsplashE8Ufcyxz5142.png';
import Group107 from '../assets/images/Group107.png';
import unsplashtZCrFpSNiIQ2 from '../assets/images/unsplashtZCrFpSNiIQ2.png';
import unsplashpVoEPpLw818 from '../assets/images/unsplashpVoEPpLw818.png';

const Sell = () => {
  return (
    <div id="sell_nft">
        <div className="container">
          <div className="sell_nft_content">
            <div className="img_container">
              <div className="top_bottom_container">
                <div className="top_content">
                  <img className="avatar" src={Ellipse95} alt="" />
                  <img className="top_card_img" src={unsplashE8Ufcyxz5142} alt="" />
                </div>
                <div className="bottom_content">
                  <img className="avatar" src={Group107} alt="" />
                  <img className="bottom_card_img" src={unsplashtZCrFpSNiIQ2} alt="" />
                </div>
              </div>
              <div className="middle_img_container">
                <img className="avatar" src={Group107} alt="" />
                <img className="middle_card_img" src={unsplashpVoEPpLw818} alt="" />
              </div>
            </div>
            <div className="text_container">
              <h2 className="sell_title">CREATE AND SELL YOUR NFTS</h2>
              <p className="sell_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a
                pellentesque
                tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur
                pretium diam
                ut. Pellentesque eu sit blandit fringilla risus faucibus.
              </p>
              <button>Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sell