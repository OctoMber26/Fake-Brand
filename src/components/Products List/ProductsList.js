import React,{Fragment} from "react";
import "./Products.css";

const Product=(props) =>{
    return(
        <Fragment>
         <div className="sections">
      <img className="shoes" src={props.product.image} alt={props.product.name} />
      <h3>{props.product.name}</h3>
      <div className="price">${props.product.price}</div>
      <div>
       <button onClick={() => props.AddItem(props.product)} className="btn btn-outline-success">Add</button>
      </div>
    </div>
        </Fragment>
    )
}

export default Product;