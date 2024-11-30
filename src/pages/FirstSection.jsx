import React from 'react';
import SliderSection from '../components/slider/SliderComponent';
import { PiArrowCircleDownLight } from 'react-icons/pi';

const FirstSection = ({ currentIndex, setCurrentIndex, scrollableSection }) => {
 
  return (
    <section className="first-section" id="first-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-12">
            <h1 className="text-light pt-3 border-top border-warning border-3">
              Buy MoonBoxes
              <br />
              <span className="main-content-color">
                and expand your NFT collection
              </span>
            </h1>
            <hr style={{ color: 'yellow' }} />
            <p className="text-warning">
              Buying MoonBoxes is a unique way to acquire NFTs and build your collection. It is built on the Binance Smart Chain, MoonRiver, Polygon, Ethereum, and DogeChain. Only available on <span className="text-light"> MoonBoxes.io. </span>
            </p>
            <div className="col-lg-7 col-md-12 d-flex justify-content-between align-items-center">
              <button className="btn btn-warning rounded-pill">
                Buy A MoonBox
              </button>
              <div
                className="section-down-icon"
                onClick={() => scrollableSection(1)}
              >
                <PiArrowCircleDownLight />
              </div>
            </div>
          </div>
          <div className='col-md-5'>
          <SliderSection
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            scrollableSection={scrollableSection}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
