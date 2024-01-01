"use client"

import React, { useState } from 'react';

const Tab = ({height}) => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
    <ul className={`nav  tab-position ${height >=294 && "tab-position-scroll" }  nav-tabs justify-content-center `}>
      {['All', "React Js", 'Node js', "Mongo Db", "CSS", "Java Script"].map((tabNumber) => (
        <li className="nav-item" style={{ cursor: "pointer" }} key={tabNumber}>
          <p
            className={`nav-link text-light mx-2 ${activeTab === tabNumber ? 'active text-dark' : ''}`}
            onClick={() => handleTabClick(tabNumber)}
           
          >
           {tabNumber}
          </p>
        </li>
      ))}
    </ul>
    {/* <div className="tab-content">
      {[1, 2, 3, 4, 5, 6].map((tabNumber) => (
        <div
          className={`tab-pane ${activeTab === tabNumber ? 'active' : ''}`}
          key={tabNumber}
        >
          Content for Tab {tabNumber}
        </div>
      ))}
    </div> */}
  </div>
  );
};

export default Tab;
