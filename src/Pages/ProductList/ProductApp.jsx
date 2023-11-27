import { useState } from "react";
import "./ProductApp.css";
import ProductForm from "../../Component/ProductForm/ProductForm";
import ProductList from "../../Component/ProductList/ProductList";

const ProductApp = () => {
  const [inputs, setInputs] = useState([]);

  const formHandlerSubmit = (event) => {
    event.preventDefault();

    // emtay inputs value for every product store
    const inputValue = {};

    // former protekta tag ke akta arrayte rupantor kora hoice everyElements
    const everyElements = [...event.target.elements];

    // array ar upare loop use kore protekta tag ke alada kora hoice
    everyElements.forEach((oneElement) => {
      // button tag a loop na chalanor jonne ai condation
      if (oneElement.tagName !== "BUTTON") {
        inputValue[oneElement.name] = oneElement.value;
        oneElement.value = "";
      }
    });
    
    if (
      inputValue["productName"].length > 0 &&
      inputValue["productType"].length > 0 &&
      inputValue["chooseColor"].length > 0 &&
      inputValue["selectSize"].length > 0 &&
      inputValue["selectQuantity"].length > 0 &&
      inputValue["description"].length > 0 &&
      inputValue["price"].length > 0
    ) {
      setInputs([...inputs, inputValue]);
    } else alert("Age nam lekh");
  };

  // Product delete handler
  const handleDelete = (idx) => {
    const newFillteredItems = inputs.filter((item, index) => index !== idx);
    setInputs(newFillteredItems);
  };

  // All Product delete handler
  const handleDeleteAll = () => {
    setInputs([]);
  };

  // useEffect(() => {

  // }, [inputs]);

  return (
    <section className="ProductList">
      <ProductForm formHandlerSubmit={formHandlerSubmit} />

      <div>
        <table id="customers">
          <thead>
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
          </thead>
          <tbody>
            {inputs.map((productData, index) => (
              <ProductList
                key={index}
                product={productData}
                id={index}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
          {inputs.length > 0 && (
            <tfoot>
              <tr>
                <td colSpan="8">
                  <button onClick={handleDeleteAll} className="listBtn">
                    Remove all
                  </button>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </section>
  );
};

export default ProductApp;
