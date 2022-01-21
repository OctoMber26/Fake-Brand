import React, {Fragment} from "react";
import "./Cart.css";
import "aos/dist/aos.css";
import data from "../data";

const Cart= (props) =>{
  const itemsPrice = props.cartItems.reduce((a, c) => a + c.qty * c.price, 0);


    return(
        <Fragment>
          <div  className="cart_section">
              <div className="cart-title">
                  <button  onClick={props.CloseCart }className="close-cart">X</button>
                  <h1>Cart items</h1>
              </div>
              <div data-aos="fade-right">
                  {props.cartItems.length === 0 && <div className="cart-status">Cart is empty</div>}
                  {props.cartItems.map((item)=>(
                      <div className="store-items" key={item.id}>
                          <div className="cart-img">
                              <img  src={item.image} />
                          </div>
                          <div>{item.name}</div>
                          <div className="col-2">
              <button onClick={() => props.RemoveItem(item)} className="remove">
                -
              </button>
              <button onClick={() => props.AddItem(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
                      </div>
                  ))}
              </div>
              <div className="total-price">
              <div className="col-2">Total Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
          </div>
        </Fragment>
    )
    
}

export default Cart;