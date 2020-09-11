import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h1>{props.kegName}</h1>
      <h2>{props.brewery}</h2>
      <p>{props.price}</p>
      <p>{props.alcoholContent}%</p>
      <p>{props.pints} Pints Remaining</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegName: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number
};

export default Keg;