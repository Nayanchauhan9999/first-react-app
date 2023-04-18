import React, { useState } from "react";

const AdminPanel = () => {
  const [input, setInput] = useState({
    title: "",
    price: "",
    quantity: "1",
    category: "other",
    description: "",
    image: "",
    rating: "",
    stock:"",
    brand:""
  });
  const sumbitProductDetails = (e) => {
    e.preventDefault();
    alert("Product Submited")
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <React.Fragment>
      <div className="container border rounded mb-5 bg-light">
        <form onSubmit={sumbitProductDetails}>
          <h3 className="display-6 bg-primary text-center text-light mt-3 rounded p-2">
            Add Product
          </h3>
          <div className="mb-3">
            <label htmlFor="producttitle" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              className="form-control"
              id="producttitle"
              placeholder="Title"
              required
              value={input.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Price"
              required
              value={input.price}
              onChange={handleChange}
              name="price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="Quantity"
              required
              value={input.quantity}
              onChange={handleChange}
              name="quantity"
              min={1}
              max={5}
            />
          </div>
          <label htmlFor="Category">Category</label>
          <select
            className="form-select form-select mb-3"
            name="category"
            onChange={handleChange}
            defaultValue="other"
          >
            <option value="electronics">electronics</option>
            <option value="men">men</option>
            <option value="woman">woman</option>
            <option value="mobile">mobile</option>
            <option value="other">other</option>
          </select>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Description"
              required
              value={input.description}
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="https://image.com/productImage.jpg"
              required
              value={input.image}
              onChange={handleChange}
              name="image"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Product Rating
            </label>
            <input
              type="number"
              className="form-control"
              id="rating"
              placeholder="★★★★"
              required
              value={input.rating}
              onChange={handleChange}
              name="rating"
              min={1}
              max={5}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">
              Product stock
            </label>
            <input
              type="number"
              className="form-control"
              id="stock"
              placeholder="Stock"
              required
              value={input.stock}
              onChange={handleChange}
              name="stock"
              min={30}
              max={60}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Product Brand
            </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              placeholder="Brand"
              required
              value={input.brand}
              onChange={handleChange}
              name="brand"
            />
          </div>
          <div className="mb-3">
            <input
              type="submit"
              className="form-control bg-success text-light"
              value="submit"
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AdminPanel;
