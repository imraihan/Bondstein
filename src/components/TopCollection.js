import React from 'react'
import unsplash_F56Y7dgrAkc from '../assets/images/unsplash_F56Y7dgrAkc.png';
import Ellipsesm from '../assets/images/Ellipsesm.png';
import Group881 from '../assets/images/Group881.png';
import Ellipse95 from '../assets/images/Ellipse95.png';
import Group88 from '../assets/images/Group88.png';
import vector from '../assets/images/vector.png';
import unsplashWjIB6UxA5Q from '../assets/images/unsplashWjIB6UxA5Q.png';
import unsplashfT49QnFucQ8 from '../assets/images/unsplashfT49QnFucQ8.png';

const TopCollection = () => {
  return (
    <section id="top_collection">
        <div className="container">
          <div className="top_collection_content">
            <div className="left">
              <img src={unsplash_F56Y7dgrAkc} alt="" />
              <div className="text_area">
                <div className="img_stock">
                  <img className="avatar" src={Ellipsesm} alt="" />
                  <div>
                    <h3 className="card_title">The Futr Abstr</h3>
                    <p>10 in the stock</p>
                  </div>
                </div>
                <div className="highest_bid">
                  <p><strong>Highest Bid</strong></p>
                  <h3 className="card_title">0.25 ETH</h3>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="middle_content">
                <img className="card_img" src={Group881} alt="" />
                <div className="middle_mix_area">
                  <h3 className="card_title">The Futr Abstr</h3>
                  <div className="middle_img_txt">
                    <img className="avatar" src={Ellipse95} alt="" />
                    <button className="btn_money">0.25 ETH</button>
                    <p className="stock">1 of 8</p>
                  </div>
                  <button className="btn_bid">Place a bid</button>
                </div>
              </div>
              <div className="middle_content">
                <img className="card_img" src={Group88} alt="" />
                <div className="middle_mix_area">
                  <h3 className="card_title">The Futr Abstr</h3>
                  <div className="middle_img_txt">
                    <img className="avatar" src={Ellipse95} alt="" />
                    <button className="btn_money">0.25 ETH</button>
                    <p className="stock">1 of 8</p>
                  </div>
                  <button className="btn_bid">Place a bid</button>
                </div>
              </div>
              <div className="middle_content">
                <img className="card_img" src={Group88} alt="" />
                <div className="middle_mix_area">
                  <h3 className="card_title">The Futr Abstr</h3>
                  <div className="middle_img_txt">
                    <img className="avatar" src={Ellipse95} alt="" />
                    <button className="btn_money">0.25 ETH</button>
                    <p className="stock">1 of 8</p>
                  </div>
                  <button className="btn_bid">Place a bid</button>
                </div>
              </div>
            </div>
            <div className="right">
              <h3 className="card_title">TOP COLLECTIONS OVER</h3>
              <p className="right_sub_title">Last 7 days</p>
              <div className="right_container">
                <div className="right_content">
                  <h3>1</h3>
                  <div className="img_container">
                    <img className="vector" src={vector} alt="" />
                    <img className="top_img" src={unsplashWjIB6UxA5Q} alt="" />
                  </div>
                  <div>
                    <h5 className="collection_title">CryptoFunks</h5>
                    <p className="paragraph">19,769.39</p>
                  </div>
                  <h3 className="card_title" style={{color: '#14C8B0'}}>
                    +26.52%
                  </h3>
                </div>
                <div className="right_content">
                  <h3>2</h3>
                  <div className="img_container">
                    <img className="top_img" src={unsplashfT49QnFucQ8} alt="" />
                  </div>
                  <div>
                    <h5 className="collection_title">CryptoFunks</h5>
                    <p className="paragraph">19,769.39</p>
                  </div>
                  <h3 className="card_title" style={{color: '#FF002E'}}>
                    +26.52%
                  </h3>
                </div>
                <div className="right_content">
                  <h3>3</h3>
                  <div className="img_container">
                    <img className="vector" src={vector} alt="" />
                    <img className="top_img" src={unsplashWjIB6UxA5Q} alt="" />
                  </div>
                  <div>
                    <h5 className="collection_title">CryptoFunks</h5>
                    <p className="paragraph">19,769.39</p>
                  </div>
                  <h3 className="card_title" style={{color: '#14C8B0'}}>
                    +26.52%
                  </h3>
                </div>
                <div className="right_content">
                  <h3>4</h3>
                  <div className="img_container">
                    <img className="vector" src={vector} alt="" />
                    <img className="top_img" src={unsplashWjIB6UxA5Q} alt="" />
                  </div>
                  <div>
                    <h5 className="collection_title">CryptoFunks</h5>
                    <p className="paragraph">19,769.39</p>
                  </div>
                  <h3 className="card_title" style={{color: '#14C8B0'}}>
                    +26.52%
                  </h3>
                </div>
                <div className="right_content">
                  <h3>5</h3>
                  <div className="img_container">
                    <img className="vector" src={vector} alt="" />
                    <img className="top_img" src={unsplashWjIB6UxA5Q} alt="" />
                  </div>
                  <div>
                    <h5 className="collection_title">CryptoFunks</h5>
                    <p className="paragraph">19,769.39</p>
                  </div>
                  <h3 className="card_title" style={{color: '#14C8B0'}}>
                    +26.52%
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TopCollection