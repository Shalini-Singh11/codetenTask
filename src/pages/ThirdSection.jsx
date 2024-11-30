import React from "react";
import AstroPaintImg from "../assets/astro_painter.png";
import { LiaFileAlt } from "react-icons/lia";


function ThirdSection() {
  return (
    <>
      <div className="third-section" id="third-section">
        <div className="container">
          <div className="row justify-content-center p-2">
            <div className="col-lg-4 col-md-12">
              <h3 className="text-light pt-3 border-top border-warning border-3 fw-bold">
                Call for artists!
                <br />
                <span className="main-content-color">
                  Applications are open for all
                  <br /> artists & creators
                </span>
              </h3>
              <hr style={{ color: "yellow" }} />
              <div className="d-flex flex-column align-items-baseline mt-5">
                <button className="btn btn-warning rounded-pill mb-2 px-3 fw-bold contact-us-button">
                  Contact Us
                </button>
                <button className="btn btn-warning rounded-pill fw-bold d-flex justify-content-between align-items-center gap-1 px-3">
                  <LiaFileAlt className="fs-5"/> Application Form
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <img src={AstroPaintImg} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
