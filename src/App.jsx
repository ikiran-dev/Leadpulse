import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import data from "./assets/data";

function App() {
  return (
    <div>
      <Navbar company={data.companyName} navigation={data.navigation} />
      <Hero
        hero1={data.hero1}
        hero2={data.hero2}
        hero3={data.hero3}
        typed={data.herotyped}
        typing={data.herotyping}
      />
      <Analytics
        analytics1={data.analytics1}
        analytics2={data.analytics2}
        analytics3={data.analytics3}
        analyticsimg={data.analyticsimg}
      />
    </div>
  );
}

export default App;
