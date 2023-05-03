import {React} from "react";
import products from "./data.js";

function List({products}){
        
    return ( 
      <ul>
      {products.map(product => 
      <li>
     <div class='paintColor'>
     </div>
      <h3>{product.name}</h3>
      <h4>{product.hex}</h4>
      
     </li>)}
  </ul>
    )
  }
  