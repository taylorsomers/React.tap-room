import React from "react";
import { v4 } from "uuid";

function NewKegForm(){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.kegName.value);
    console.log(event.target.brewery.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.pints.value);
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

export default NewKegForm;