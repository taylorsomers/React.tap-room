import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingSellPint } = props;

  function handleSellPintClick(event) {
    event.preventDefault();
    props.onSellPint({
      pints: event.target.pints - 1,
      id: keg.id()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <h1>{keg.kegName}</h1>
        <h2>{keg.brewery}</h2>
        <p>{keg.price}</p>
        <p>{keg.alcoholContent}%</p>
        <p>{keg.pints} Pints Remaining</p>
        <button onClick={ () => onClickingSellPint(keg.id) }>Sell a Pint</button>
        <button onClick={ props.onClickingEdit }>Update Keg</button>
        <button onClick={ () => onClickingDelete(keg.id) }>Delete Keg</button>
      </form>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default KegDetail;