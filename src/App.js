
import './App.css';
import {products}  from './data.js';
import {Header} from './components/Header.js';
import amaranth from './images/amaranth.JPG';
import brightPink from './images/brightpink.JPG';
import lightCoral from './images/lightCoral.JPG';
import cardinal from './images/cardinal.JPG';
import crimson from './images/crimson.JPG';

function List({products}){
        
  return ( 
    <>
    <Header/>
    <div id='homeMain'>
    <ul className='productGrid'>
    {products.map(product => 
    <li>
      <img src= {product.url} alt={product.alt}/>
   <div className='paintColor'>
   </div>
    <h3>{product.name}</h3>
    <h4>{product.hex}</h4>
    
   </li>)}
</ul>
</div>
</>
  )
}

function App() {
  
  return (
    <div className="App">
       <List products = {products} />
    </div>
  );
}

export default App;
