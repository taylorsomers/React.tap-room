import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    kegName: "Pumpkin Brew",
    brewery: "Old Weasel's",
    price: "$35.00",
    alcoholContent: 14,
    pints: 124
  },
  {
    kegName: "Snake Bite",
    brewery: "Wild West Brewery",
    price: "$45.00",
    alcoholContent: 11,
    pints: 124
  }
];

function KegList(){
  return (
    <React.Fragment>
      {masterKegList.map((keg, index) =>
        <Keg
          kegName={keg.kegName}
          brewery={keg.brewery}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default KegList;