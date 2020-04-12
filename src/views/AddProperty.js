import React from "react";
import authHOC from "./../utils/authHOC";

function AddProperty() {
    return(
      <>
          <h1>Add Property</h1>
      </>
    );
}

export default authHOC(AddProperty);