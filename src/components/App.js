import React from "react";
import Header from "./Header.js";

function App(){
  const kegName = "Pumpkin Brew";
  const brewery = "Old Weasel's";
  const price = "$35.00";
  const alcoholContent = "14%";
  const pints = "124";
  return (
    <React.Fragment>
      <Header />
      <h1>{kegName}</h1>
      <h2>{brewery}</h2>
      <p>{price}</p>
      <p>{alcoholContent}</p>
      <p>{pints}</p>
    </React.Fragment>
  );
}

export default App;