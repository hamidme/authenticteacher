import React, { useState } from "react";
import { TabToggler } from "./styles/Main.style";

import Tabs from "./Tabs";
import SearchByLocation from "./SearchByLocation";
import SearchByCategories from "./SearchByCategories";

const tabs = ["Search by location", "Search by categories"];

const Main = () => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <TabToggler>
        <Tabs active={active} setActive={setActive} />
      </TabToggler>
      {active === tabs[0] ? <SearchByLocation /> : <SearchByCategories />}
    </>
  );
};

export default Main;
