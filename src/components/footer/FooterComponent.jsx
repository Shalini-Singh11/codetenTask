import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer main-bg-color fixed-bottom p-2">
      <div className="footer-content d-flex align-items-center justify-content-center gap-3 d-lg-none d-md-none">
        <p className="text-black">Tier </p>
        <p className="text-black">Moonshot Balance </p>
        <p className="text-black">Total NFTs</p>
      </div>
      <div className="left-traingle"></div>
      <div class="trapezoid-another">
        <p className="text-uppercase main-content-color text-center ">
          Tier <br />-
        </p>
        <div class="trapezoid d-flex align-items-center justify-content-center">
          <p className="text-uppercase text-black text-center">
            Moonshot Balance <br />-
          </p>
        </div>
        <p className="text-uppercase main-content-color text-center ">
          Total NFTs
          <br /> -
        </p>
      </div>
      <div className="right-traingle"></div>
    </footer>
  );
};

export default FooterComponent;
