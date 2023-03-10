import React from 'react'

import Ellipse95 from '../assets/images/Ellipse95.png';
import unsplash_F56Y7dgrAkc from '../assets/images/unsplash_F56Y7dgrAkc.png';
import unsplash_pVoEPpLw818 from '../assets/images/unsplash_pVoEPpLw818.png';
import unsplashpVoEPpLw818 from '../assets/images/unsplashpVoEPpLw818.png';
import unsplashLpbyDENbQQg from '../assets/images/unsplashLpbyDENbQQg.png';
import unsplash9anj7QWy2g from '../assets/images/unsplash9anj7QWy2g.png';

const Feature = () => {
  return (
    <section id="feature_nft">
        <div className="container">
          <h2 className="section_title">COLLECTION FEATURED NFTS</h2>
          <div className="feature_content">
            <div className="content">
              <div className="img_container">
                <img className="big_img" src={unsplash_F56Y7dgrAkc} alt="" />
                <div className="three_img_container">
                  <img src={unsplashpVoEPpLw818} alt="" />
                  <img src={unsplashLpbyDENbQQg} alt="" />
                  <img src={unsplash9anj7QWy2g} alt="" />
                </div>
              </div>
              <div className="text_container">
                <h3 className="card_title">Amazing Collection</h3>
                <div className="item">
                  <div className="avatar_info">
                    <img src={Ellipse95} alt="" />
                    <p>by Arkhan</p>
                  </div>
                  <button className="btn_item">Total 54 Items</button>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="img_container">
                <img className="big_img" src={unsplash_F56Y7dgrAkc} alt="" />
                <div className="three_img_container">
                  <img src={unsplash_pVoEPpLw818} alt="" />
                  <img src={unsplashLpbyDENbQQg} alt="" />
                  <img src={unsplash9anj7QWy2g} alt="" />
                </div>
              </div>
              <div className="text_container">
                <h3 className="card_title">Amazing Collection</h3>
                <div className="item">
                  <div className="avatar_info">
                    <img src={Ellipse95} alt="" />
                    <p>by Arkhan</p>
                  </div>
                  <button className="btn_item">Total 54 Items</button>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="img_container">
                <img className="big_img" src={unsplash_F56Y7dgrAkc} alt="" />
                <div className="three_img_container">
                  <img src={unsplash_pVoEPpLw818} alt="" />
                  <img src={unsplashLpbyDENbQQg} alt="" />
                  <img src={unsplash9anj7QWy2g} alt="" />
                </div>
              </div>
              <div className="text_container">
                <h3 className="card_title">Amazing Collection</h3>
                <div className="item">
                  <div className="avatar_info">
                    <img src={Ellipse95} alt="" />
                    <p>by Arkhan</p>
                  </div>
                  <button className="btn_item">Total 54 Items</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Feature