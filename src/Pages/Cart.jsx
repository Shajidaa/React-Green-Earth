import React, { use } from 'react';
import { CartContext } from '../Layouts/RootLayout';




const Cart = () => {
        const {cart,setCart}=use(CartContext)
        
const handleDelete=(cartItems)=>{
const itemDelete=cart.filter(item=>item !==cartItems)
setCart(itemDelete)
console.log(cartItems);


}
    
    return (
        <div>
          {
            cart.map(c=><div key={c.id} className="card w-96 bg-base-300 card-xs shadow-sm">
  <div className="card-body flex flex-col justify-center items-center">
    <h2 className="card-title ">{c.name}</h2>
  
    <div className="justify-center card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button  onClick={handleDelete}
      
      className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>



            )
          }
        </div>
    );
};

export default Cart;