import { useContext, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";

const FormBudget = () => {
  const { client, seller, product } = useContext(DataApiContext);

  const [budget, setBudget] = useState({
    seller: seller.length <= 0 ? undefined : seller[0].id,
    client: client.length <= 0 ? undefined : client[0].id,
    product: [],
  });

  const [arrProduct, setArrProduct] = useState({
        product: product[0].id,
        price: product[0].price,
        title: product[0].title
  });

 
  function setBudgetInputs({ target }) {
    const { id, value } = target;

    if (id === "client") {
      let clientSelected = client.filter((item) => {
        return item.name === value;
      });

      setBudget({ ...budget, [id]: Number(clientSelected[0].id)});


    } else if (id === "seller") {

      let sellerSelected = seller.filter((item) => {
        return item.name === value;
      });

      setBudget({ ...budget, [id]: Number(sellerSelected[0].id) });


    }else if (id === "seller") {

      let sellerSelected = seller.filter((item) => {
        return item.name === value;
      });

      setBudget({ ...budget, [id]: Number(sellerSelected[0].id) });

    }else if(id === "product"){

      let productSelected = product.filter((item) => {
        return item.title === value;
      });
    
      setArrProduct({
        title: productSelected[0].title,
        price: Number(productSelected[0].price),
        product: Number(productSelected[0].id)
      })
  
    }else {
      setBudget({ ...budget, [id]: value });
    }
  }


  return (
    <>
      <form className="flex justify-center gap-24">
      <div>
        <label> Client </label>

        <select id="client" onChange={setBudgetInputs}>
          {client.map((item) => {
            return <option key={item.id}> {item.name} </option>;
          })}
        </select>

        <label> Seller </label>

        <select id="seller" onChange={setBudgetInputs}>
          {seller.map((item) => {
            return <option key={item.id}> {item.name} </option>;
          })}
        </select>

        <label> Product </label>
        <select id="product" onChange={setBudgetInputs}>
          {product.map((item) => {
            return <option key={item.id}> {item.title} </option>;
          })}
        </select>
          <button onClick={(e) => {
          e.preventDefault();
          setBudget({...budget, product: [...budget.product, arrProduct]})

           
        }}> Add Product </button>

          <br/>
          <br/>

        <button className="block" onClick={(e) => {
          e.preventDefault();
          console.log(budget)
        }}> Send </button>
      </div>

      <div>
        <h1 className="text-center"> Products </h1>
        {budget.product.map((item) => {
              let productRender = product.find((product) => product.id === item.product)

              return <li> {` ${productRender.id} - ${productRender.title} - R$ ${Number(productRender.price).toFixed(2)}`}</li>
        })}
        
      

        <p> Valor total: R$ {budget.product.reduce((acc, item) => acc + item.price, 0)}  </p>
      </div>
        
      </form>
    </>
  );
};

export default FormBudget;
