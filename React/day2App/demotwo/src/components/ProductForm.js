import { useState } from "react";

function ProductForm(props) {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const productData = {
      title: newTitle,
      data: newDate,
    };
    props.onSaveProduct(productData)
    setTitle("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product-title">
        <label>Title: </label>
        <input
          type="text"
          value={newTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-product-date">
        <label>Date: </label>
        <input
          type="date"
          value={newDate}
          min="2023-01-01"
          max="2023-12-12"
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="new-product-button">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}

export default ProductForm;
