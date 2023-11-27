/* eslint-disable react/prop-types */
import "./ProductList.css";
const ProductList = ({product, handleDelete, id}) => {
  const {productName,productType,chooseColor,selectSize,selectQuantity,price,description} = product; 
  return (
    <tr>

      <td>{productName}</td>
      <td>{productType}</td>
      <td>{chooseColor}</td>
      <td>{selectSize}</td>
      <td>{selectQuantity}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td style={{cursor: "pointer"}} onClick={()=> handleDelete(id)}>Delete</td>
    </tr>
  );
};

export default ProductList;
