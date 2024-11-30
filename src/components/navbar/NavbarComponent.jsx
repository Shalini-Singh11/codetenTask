import React, { useState } from "react";
// ==============REACT Cicons ============ 
import { IoArrowBackCircleOutline, IoTimerSharp } from "react-icons/io5"; 
import { SiFiles, SiBinance } from "react-icons/si"; 
import { LuInfo } from "react-icons/lu"; 
import { RxCross1 } from "react-icons/rx"; 
import { TbDroplets } from "react-icons/tb"; 
// ============menu images ==================== 
import Logo_Img from "../../assets/logo.png"; 
import { Tooltip } from "react-tooltip"; 

const NavbarComponent = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  //=========== Array to hold the icons and tooltip info ===============
  const icons = [
    { id: "my-tooltip-arrow", icon: <IoArrowBackCircleOutline />, tooltip: "Recent, live and upcoming NFT drops." },
    { id: "my-tooltip-three", icon: <TbDroplets />, tooltip: "Recent, live and upcoming NFT drops." },
    { id: "my-tooltip-files", icon: <SiFiles />, tooltip: "File options and settings." },
    { id: "my-tooltip-timer", icon: <IoTimerSharp />, tooltip: "Timer settings." },
    { id: "my-tooltip-info", icon: <LuInfo />, tooltip: "Information and guides." },
    { id: "my-tooltip-binance", icon: <SiBinance />, tooltip: "Binance-related actions." }
  ];

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <nav className="navbar fixed-top main-bg-color">
      <div className="container-fluid ps-5 pe-5 me-5">
        <div className="navbar-brand">
          <img src={Logo_Img} alt="Logo" />
          <span className="text-light">MOON</span>BOXES
          &nbsp; <RxCross1 className="text-dark fs-4 cross-icons d-md-none" onClick={toggleNavbar} />
        </div>
        <div className="trapezoid-navbar">
          <div className="navbar-icons d-flex align-items-center gap-3">
            {icons.map(({ id, icon, tooltip }) => (
              <div className="tooltip-container" key={id}>
                <a data-tooltip-id={id} data-tooltip-content={tooltip}>
                  <i>{icon}</i>
                </a>
                <Tooltip id={id} place="bottom" globalEventOff="click" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*========= for mobile view========== */}
      {isNavbarVisible && (
        <div className="navbar-menu d-md-none">
          <div className="navbar-icons d-flex align-items-center gap-2">
            {icons.map(({ id, icon, tooltip }) => (
              <div className="tooltip-container" key={id}>
                <a data-tooltip-id={id} data-tooltip-content={tooltip}>
                  <i>{icon}</i>
                </a>
                <Tooltip id={id} place="bottom" globalEventOff="click" />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
