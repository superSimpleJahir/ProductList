import { useState } from "react";
import "./ProductsList.css";
import Product from "../../Component/Product/Product";

const ProductsList = () => {
  const [pName, setPName] = useState("");
  const [pType, setpType] = useState("");
  const [pColor, setpColor] = useState("");
  const [psize, setPSize] = useState("");
  const [pquantity, setpquantity] = useState("");
  const [pprice, setpPrice] = useState("");
  const [pDescription, setpDescription] = useState("");
  const [productsList, setproductsList] = useState([]);
  const [productList, setproductList] = useState({});

  const productname = (e) => {
    setPName(e.target.value);
  };
  const producttype = (e) => {
    setpType(e.target.value);
  };
  const choosecolor = (e) => {
    setpColor(e.target.value);
  };
  const selectsize = (e) => {
    setPSize(e.target.value);
  };
  const selectquantity = (e) => {
    setpquantity(e.target.value);
  };
  const price = (e) => {
    setpPrice(e.target.value);
  };
  const description = (e) => {
    setpDescription(e.target.value);
  };

  // handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setproductList({
      pName,
      pColor,
      pDescription,
      pType,
      pprice,
      pquantity,
      psize,
    });

    setproductsList([...productsList, productList]);

    // setPName("");
    // setpType("");
    // setpColor("");
    // setPSize("");
    // setpquantity("");
    // setpPrice("");
    // setpDescription("");
    console.log(productsList);
  };

  return (
    <section className="ProductList">
      <h1>Product List</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <label htmlFor="ProductName">
              Product name: <br />
              <input
                value={pName}
                onChange={productname}
                type="text"
                name="productName"
                id="ProductName"
              />
            </label>
          </div>

          <div>
            <label htmlFor="ProductType">
              Product type: <br />
              <select value={pType} onChange={producttype} name="productType" id="ProductType">
                <option value="Choose">Choose Type</option>
                <option value="Panjabi">Panjabi</option>
                <option value="Pajama">Pajama</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex">
          <div>
            <label htmlFor="chooseColor">
              Choose Color: <br />
              <select value={pColor} onChange={choosecolor} name="chooseColor" id="chooseColor">
                <option>Choose Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="selectSize">
              Select Size: <br />
              <select value={psize} onChange={selectsize} name="selectSize" id="selectSize">
                <option>Select Size</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex">
          <div>
            <label htmlFor="selectQuantity">
              Select Quantity: <br />
              <select
                value={pquantity}
                onChange={selectquantity}
                name="selectQuantity"
                id="selectQuantity"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="price">
              Price: <br />
              <input value={pprice} onChange={price} type="number" name="price" id="price" />
            </label>
          </div>
        </div>

        <div className="flex">
          <label htmlFor="description">
            Description: <br />
            <textarea
              value={pDescription}
              onChange={description}
              name="description"
              id="description"
            ></textarea>
          </label>
        </div>
        <div>
          <button className="btn" type="submit">
            Add Product
          </button>
        </div>
      </form>

      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Color</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>

        {  productsList.map((value, index) => (
          <Product key={index} product={value} />
        ))}
      </table>
    </section>
  );
};

export default ProductsList;
