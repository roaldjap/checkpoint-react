import React from "react";

class AddFishForm extends React.Component {
  createFish = e => {
    e.preventDefault();
    console.log("Test");
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="price" placeholder="Price" />
        <select name="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea type="text" name="desc" placeholder="Description" />
        <input type="text" name="image" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
