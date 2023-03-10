import React from 'react';
import cardtick from '../assets/images/cardtick.png';
import chartsquare from '../assets/images/chartsquare.png';
const Amazing = () => {
  return (
    <div>
        <section id="nft_art">
        <div className="container">
          <div className="nft_art_content">
            <h2 className="section_title">
              THE AMAZING NFT ART OF THE WORLD HERE
            </h2>
            <div className="logo_text_container">
              <img src={cardtick} alt="" />
              <div className="text_area">
                <h3 className="card_title">Fast Transaction</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam
                  viverra
                  tellus imperdiet.</p>
              </div>
            </div>
            <div className="logo_text_container">
              <img src={chartsquare} alt="" />
              <div className="text_area">
                <h3 className="card_title">Growth Transaction</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam
                  viverra tellus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Amazing