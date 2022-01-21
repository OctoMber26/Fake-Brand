import React,{ Fragment } from 'react';
import Cart from './components/Cart Section/Cart';
import Header from './components/Header/header';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(false);

  const CloseCart=() =>{
    setCart(false)
  }

  const OpenCart= () =>{
    setCart(true)
  }
  const AddItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const RemoveItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Fragment>
      <Header 
      countCartItems={cartItems.length}
      OpenCart={OpenCart}
      />
      {cart &&<Cart 
       AddItem={AddItem}
       RemoveItem={RemoveItem}
       cartItems={cartItems}
      AddItem={AddItem}
      CloseCart={CloseCart}
      />}
      <Main AddItem={AddItem}/>
      </Fragment>
  );
}

export default App;
