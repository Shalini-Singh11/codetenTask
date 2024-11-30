import React from "react";
//===================== components =====================
import Sidebar from "./components/sidebar/SidebarComponent";
import RightSidebar from "./components/rightsidebar/RightSidebarComponent";
import Navbar from "./components/navbar/NavbarComponent";
import Footer from "./components/footer/FooterComponent";
import Sky from "./components/sky/SkyComponent";
//===================== pages =====================
import MainContent from "./pages/MainContent";
import "./App.css";

const App = () => {
  
  return (
    <div className="main-layout">
    <Sky />
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <div className="scrollable-content">
          <MainContent />
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
