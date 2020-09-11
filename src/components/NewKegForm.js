import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      brewery: event.target.brewery.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
      id: v4()
    })
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          name="kegName"
          placeholder="Keg Name" />
        <input
          type="text"
          name="brewery"
          placeholder="Brewery" />
        <input
          type="text"
          name="price"
          placeholder="Price" />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content (Percent)" />
        <input
          type="number"
          name="pints"
          max="124"
          placeholder="Number of Pints in Keg" />
        <button type="submit">Add Keg to Keg List</button>
      </form>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;