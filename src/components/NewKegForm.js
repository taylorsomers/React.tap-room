import React from "react";
import { v4 } from "uuid";

function NewKegForm(){
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