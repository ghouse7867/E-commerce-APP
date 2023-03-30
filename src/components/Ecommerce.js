import { useEffect, useS4 } from "react";
import get from "axios";
import { useState,useReducer } from "react";
const initialState = {count: 0};
export default function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  

function reducer(state, action) {
 
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

  useEffect(function () {
    get("https://fakestoreapi.com/products/")
      // .then(response=>response.json())
      // .then(datas=>console.log(datas.data))
      .then(function (output) {
       
        setProducts(output.data);
        
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className='d-flex flex-wrap'>
      {products.map((i) => {
        return (
          <div>
            {/* <h2 className="text-success">Ecommerce Website</h2> */}
            <section className="row d-flex flex-wrap">
            <main className='col-9'>
                <div className='d-flex flex-wrap'>
                    
                          <div key={i.id} className='card m-2 p-2' style={{width:'200px',borderRadius:'25px',border:'2px solid black'}}>
                               <img src={i.image} className='card-img-top' alt="img" height='150px'/>
                               <div className='card-header bg-info' style={{height:'160px',borderRadius:'25px'}}>
                                <p>{i.title}</p>
                               </div>
                          </div>  
                </div>
             </main>
            </section>
            <div>
            Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
          </div>
        );
      })}
    </div>
  );
}
