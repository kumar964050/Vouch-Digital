import React, { useState } from "react";

import SideNav from "../../Components/SideNav";

import "./index.css";

import HomeContent from "../../Components/HomeContent";

const Home = () => {
  const [isActiveTab, setIsActiveTab] = useState("view");
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="home_container">
      <SideNav
        setIsActiveTab={setIsActiveTab}
        isActiveTab={isActiveTab}
        setIsMenu={setIsMenu}
        isMenu={isMenu}
      />
      <HomeContent isActiveTab={isActiveTab} setIsMenu={setIsMenu} />
    </div>
  );
};

export default Home;
