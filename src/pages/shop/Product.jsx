import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/action'

const Product = (props) => {

  const { id, productName, price, productImage } = props.data;

  const dispatch = useDispatch()

  const send = (e) => {
    dispatch(addToCart(e))
    console.log(id, productImage, productName, price);
  }

  return (
    <div className="product">
        <img src={productImage} alt={id}  />
        <div className="description">
          <p><b>{productName}</b></p>
          <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => send(props)}>Add To Cart</button>
    </div>
  )
}

export default Product