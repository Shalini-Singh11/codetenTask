import React, { useRef, useEffect } from "react";
import Carousel from "../components/carousel/CarouselComponent";

const SecondSection = ({ sectionRefs }) => {
  const sectionRef = useRef([]);

  useEffect(() => {
    sectionRefs.current[1] = sectionRef.current;
  }, [sectionRefs]);

  return (
    <section className="second-section" id="second-section" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <Carousel />
        </div>
        <div className="row justify-content-evenly pt-4">
          <div className="col-lg-4 col-md-12">
            <h2 className="text-light pt-3 border-top border-warning border-3">
              Buy MoonBoxes.io
              <br />
              <span className="main-content-color">
                your base to purchase NFTs
              </span>
            </h2>
            <hr style={{ color: 'yellow' }} />
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="text-light pt-3 border-top border-warning border-1 m-0">
              MoonBoxes.io
              <span className="main-content-color">
                MoonBoxes.io offers you a complete overview of upcoming, active
                and recent NFT drops.{" "}
              </span>
              <br />
              <br />
              <h6 className="mb-3">
                MoonBoxes.io{" "}
                <span className="main-content-color">
                  {" "}
                  will be home to collectors and amazing NFT artists.
                </span>
              </h6>
              <button className="btn btn-warning rounded-pill fw-bold py-1 px-5">
                Explore
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
