import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let addKegButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  }
}

export default KegControl;