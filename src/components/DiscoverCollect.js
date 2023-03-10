import React from 'react'

import Group83 from '../assets/images/Group83.png';
import unsplashE8Ufcyxz514 from '../assets/images/unsplashE8Ufcyxz514.png';
import unsplashpVoEPpLw818 from '../assets/images/unsplashpVoEPpLw818.png';
import unsplashtZCrFpSNiIQ from '../assets/images/unsplashtZCrFpSNiIQ.png'; 

const DiscoverCollect = () => {
  return (
    <div>
        <section id="collect_art">
        <div className="container">
          <div className="collect_art_content">
            <div className="text_container">
              <h1 className="collect_art_title hero_title">
                DISCOVER, AND COLLECT DIGITAL ART NFTS
              </h1>
              <p className="collect_art_paragraph">Digital marketplace for crypto collectibles and non-fungible tokens
                (NFTs).
                Buy, Sell,
                and discover exclusive digital assets.</p>
              <div className="button_number">
                <button>Explore Now</button>
                <div className="numeric_container">
                  <div className="numeric_content">
                    <h1 className="number_text hero_title">98k+</h1>
                    <p className="collect_art_paragraph">Artwork</p>
                  </div>
                  <div className="numeric_content">
                    <h1 className="number_text hero_title">12k+</h1>
                    <p className="collect_art_paragraph">Auction</p>
                  </div>
                  <div className="numeric_content">
                    <h1 className="number_text hero_title">15k+</h1>
                    <p className="collect_art_paragraph">Artist</p>
                  </div>
                </div>
              </div>
            </div> 
            <div className="img_container">
              <div className="images">
                <div className="text_area">
                  <div className="upper_part">
                    <h2 className="section_title">Abstr Gradient NFT</h2>
                    <div className="img_name">
                      <img src="images/Ellipse 95.png" alt="" />
                      <h3 className="card_title">Arkhan17</h3>
                    </div>
                  </div>
                  <div className="lower_part">
                    <div className="left_side">
                      <p>Current Bid</p>
                      <p>0.25 ETH</p>
                    </div>
                    <div className="right_side">
                      <p>Ends in</p>
                      <p>12h 43m 42s</p>
                    </div>
                  </div>
                </div>
                {/* <img class="rectangle" src="images/Rectangle 183.png" alt=""> */}
                <img className="circle" src={Group83} alt="" />
                <img className="top" src={unsplashE8Ufcyxz514} alt="" />
                <img className="middle" src={unsplashpVoEPpLw818} alt="" />
                <img className="bottom" src={unsplashtZCrFpSNiIQ} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiscoverCollect