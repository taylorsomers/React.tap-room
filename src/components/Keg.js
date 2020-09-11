import React from "react";

function Keg(props){
  return (
    <React.Fragment>
      <h1>{props.kegName}</h1>
      <h2>{props.brewery}</h2>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.pints} Pints Remaining</p>
    </React.Fragment>
  );
}

export default Keg;