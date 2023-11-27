/* eslint-disable react/prop-types */

const ProductForm = ({formHandlerSubmit}) => {
  return (
    <div className="ProductList">
      <form onSubmit={formHandlerSubmit}>
        <div>
          <label htmlFor="ProductName">
            Product name: <br />
            <input type="text" name="productName" id="ProductName" />
          </label>
        </div>

        <div>
          <label htmlFor="ProductType">
            Product type: <br />
            <select name="productType" id="ProductType">
              <option value="">Choose Type</option>
              <option value="Panjabi">Panjabi</option>
              <option value="Pajama">Pajama</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="chooseColor">
            Choose Color: <br />
            <select name="chooseColor" id="chooseColor">
              <option value="">Choose Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="selectSize">
            Select Size: <br />
            <select name="selectSize" id="selectSize">
              <option value="">Select Size</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="selectQuantity">
            Select Quantity: <br />
            <input type="number" name="selectQuantity" id="selectQuantity" />
          </label>
        </div>

        <div>
          <label htmlFor="price">
            Price: <br />
            <input type="number" name="price" id="price" />
          </label>
        </div>

        <label htmlFor="description">
          Description: <br />
          <textarea name="description" id="description"></textarea>
        </label>

        <div>
          <button className="btn" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
