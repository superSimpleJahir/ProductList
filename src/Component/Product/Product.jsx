/* eslint-disable react/prop-types */
import "./Product.css";

const Product = ({ product }) => {
  const { pName, pColor, pDescription, pType, pprice, pquantity, psize } = product;
  return (
    <tr >
      <td>{pName}</td>
      <td>{pColor}</td>
      <td>{pDescription}</td>
      <td>{pType}</td>
      <td>{pprice}</td>
      <td>{pquantity}</td>
      <td>{psize}</td>
      <button>
        <i className="fa-solid fa-trash"></i>
      </button>
    </tr>
  );
};

export default Product;
