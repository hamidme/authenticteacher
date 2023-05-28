import React from "react";
import { StyleTabs } from "./styles/Main.style";

const tabs = ["Search by location", "Search by categories"];

const Tabs = ({ active, setActive }) => {
  return (
    <>
      {tabs.map((tab) => (
        <StyleTabs
          key={tab}
          active={active === tab}
          onClick={() => setActive(tab)}
        >
          {tab}
        </StyleTabs>
      ))}
    </>
  );
};

export default Tabs;
