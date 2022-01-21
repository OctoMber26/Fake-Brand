import React, {Fragment} from "react";
import { useEffect } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import data from "../data";
import Product from "../Products List/ProductsList";
import "./ProdList.css";

const Main = (props) =>{
    useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])
    return (
    <Fragment>
    <div className="row">
        <div className="description col-lg-6  col-sm-12">
        <p data-aos="fade-right" className="descriptive">Just move </p>
        </div>
        <div data-aos="fade-left" className="products  col-lg-6  col-sm-12">
         <p className="see_products">See our products</p>
         <div className="shoe_img">
             <img src="https://www.pngitem.com/pimgs/m/508-5089009_dior-x-nike-air-jordan-1-hd-png.png" />
         </div>
         <button  type="button" className="btn btn-outline-dark">See products</button>
        </div>
        <div className="products_section  col-lg-12">
        {data.map((product) => (
          <Product key={product.id} product={product}
          AddItem={props.AddItem}
          >
          </Product>
        ))}
        </div>
    </div>
    </Fragment>
    )
}

export default Main;