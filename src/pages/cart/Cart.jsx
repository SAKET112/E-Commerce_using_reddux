import { useSelector, useDispatch } from "react-redux";
import './Cart.css';
import {deleteFromCart} from '../../redux/action.js'

const Cart = () => {

  const getData = useSelector((state) => state.cartReducer.carts)
  console.log(getData);

  const dispatch = useDispatch();

  // const deleteItem = (id) => {
  //     dispatch(deleteFromCart(id))
  // }

  return (
    <div>
        {
          getData.map((e) => {
            return(
              <div key={e.data.id}  className="cartContainer" >
                  <div className="productContainer">
                        <img src={e.data.productImage} alt="" />
                        <div className="productDetail">
                            <h2>{e.data.productName}</h2>
                            <p>Price : ${e.data.price}</p>
                            <button onClick={(e) => dispatch(deleteFromCart(e.data.id))}>Delete Item</button>
                        </div>
                  </div>
                  {
                    console.log(e.data)
                  }
              </div>
            )
          })
        }
    </div>
  )
}

export default Cart