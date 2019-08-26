import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="SHELFIE">
        <p>SHELFIE</p>
        <button>DASHBOARD</button>
        <button>ADD INVENTORY</button>
      </header>

      <div className='boxes'>
        <div className='box-one'>
          <p>Shoes</p>
          <p>$50.55</p>
          <img  src='https://cdn.shopify.com/s/files/1/0009/3834/4509/products/08208-002-0e79e4134d202f6384a26da843eb96102cb886ab_2000x.jpg?v=1561483169' width="150" height="120" />
          
        
        </div>

        <div className='box-two'>
        <p>Pants</p>
        <p>$20.89</p>
        <img  src='https://d4zpg1jklewne.cloudfront.net/steak/spree-variant/mj-reg-ski-fbk-2/mens-faded-black-skinny-jeans-1-product.jpg?1498164862' width="150" height="120" />
        </div>

        <div className='box-three'>
        <p>Jacket</p>
        <p>$99.99</p>

        <img  src='https://i.ebayimg.com/images/g/HbEAAOSwj85Zh8N0/s-l300.jpg' width="120" height="120" />
        </div>
       
        <div className='box-four'>
          <img   src='https://cdn11.bigcommerce.com/s-405b0/images/stencil/500x659/products/107/10322/5000B_White_Front__97777.1507230279.jpg?c=2' width="150" height="130"/>

          <p>Image Url:</p>
          <input></input>

          <p>Product Name:</p>
          <input></input>

          <p>Price:</p>
          <input></input>
          <button>Add</button>
          <button>Add To Inventory</button>
        </div>

      </div>

    </div>

  );
}

export default App;
