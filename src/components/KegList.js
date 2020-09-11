import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props){
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = { props.onKegSelection }
          kegName={keg.kegName}
          brewery={keg.brewery}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default KegList;