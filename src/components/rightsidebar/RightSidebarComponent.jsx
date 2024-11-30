import React from "react";
//===================== React Icons =====================
import { TbWallet } from "react-icons/tb";

const RightSidebarComponent = () => {
  
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-content">
        <div className="wallet-icon">
          <TbWallet />
        </div>

        {/*===================== Sidebar Items =====================*/}
        <p className="sidebar-item">Moonshot</p>
        <hr className="divider" />
        <p className="sidebar-item">MoonSea</p>
        <hr className="divider" />
        <p className="sidebar-item">Tokenomics</p>
      </div>
    </div>
  );
};

export default RightSidebarComponent;
