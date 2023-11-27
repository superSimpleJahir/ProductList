import { useEffect, useState } from "react";
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
        setInputs([...inputs, inputValue]);
      }
    });
  };
  
  // Product delete handler
  const handleDelete = (idx) => {
    const newFillteredItems = inputs.filter((item, index) => index !== idx);
    setInputs(newFillteredItems);
  };
  // jodi forme nia kaj korte  hoi tahole useEffect babohar korte hobe karon akhane aktu somai nia kaj kore
  useEffect(() => {
    // console.log(inputs);
  }, [inputs]);

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

          <tfoot>
            <tr>
              <td>
                <button>Remove all</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default ProductApp;

{
  /* <i className="fa-solid fa-trash"></i> */
}
