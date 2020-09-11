import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props){
  return (
    <React.Fragment>
      {props.kegList.map((keg, index) =>
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

Keg.propTypes = {
  kegList: PropTypes.array
};

export default KegList;