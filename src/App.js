import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: `laptop`, price: 49999 },
    {name:`Mobile`,price:40000}
  ]
  return (
    <div className="App">
   { products.map(product=> <Products name ={product.name} price={product.price}></Products>)}
      {/* option1
  <Products name="Laptop" price="40000"></Products> */}
      
    </div>
  );
}

const Products = (props) => {
  return (
    <div className="products">
      <h1>Name:{props.name} </h1>
      <h1>Price:{props.price} </h1>
    </div>
  );
};

export default App;
