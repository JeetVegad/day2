import './App.css';

function ProductList(props){
      const prds = props.products;
      const items = prds.map((item) =>
     
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
      </tr>);
  return(
          <table className="table mt-5">
            <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            </thead>
            <tbody>
            {items}
            </tbody>
            </table>
  );
}

function Product(){
 let prd=[{name:"Soap",price:25,quantity:35},
  {name:"Detergent",price:25,quantity:35},
  {name:"Shampoo",price:25,quantity:35}]

  return(
      <div>
        <ProductList products = {prd}></ProductList>
        </div>
  );
}


function App() {
  return (
      <div>
        <Product></Product>
      </div>
  );
}

export default App;
