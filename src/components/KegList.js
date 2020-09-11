import React from "react";
import Keg from "Keg.js";

function KegList(){
  return (
    <Keg
      kegName = "Pumpkin Brew"
      brewery = "Old Weasel's"
      price = "$35.00"
      alcoholContent = "14%"
      pints = "124" />
  );
}

export default KegList;