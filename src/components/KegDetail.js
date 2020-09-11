import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingSellPint } = props;

  return (
    <React.Fragment>
      <h1>{keg.kegName}</h1>
      <h2>{keg.brewery}</h2>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}%</p>
      <p>{keg.pints} Pints Remaining</p>
      <button onClick={( onClickingSellPint(keg.id))}>Sell Pint</button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func
};

export default KegDetail;