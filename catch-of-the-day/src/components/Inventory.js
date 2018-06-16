import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="invetory">
        <h2>Inventory</h2>
        <AddFishForm />
      </div>
    );
  }
}

export default Inventory;
