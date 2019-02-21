import React from "react";
import HomeMenu from "./HomeMenu";
import HomeSection from "./HomeSection";

class HomeBody extends React.Component {
  render() {
    return (
      <div>
        <HomeMenu />
        <HomeSection />
        
      </div>
    );
  }
}

export default HomeBody;
