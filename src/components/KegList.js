import React from "react";
import Keg from "Keg.js";

function KegList(){
  return (
    <React.Fragment>
      <Keg
        kegName = "Pumpkin Brew"
        brewery = "Old Weasel's"
        price = "$35.00"
        alcoholContent = "14%"
        pints = "124" />
      <Keg
        kegName = "Snake Bite"
        brewery = "Wild West Brewery"
        price = "$45.00"
        alcoholContent = "11%"
        pints = "124" />
    </React.Fragment>
  );
}

export default KegList;