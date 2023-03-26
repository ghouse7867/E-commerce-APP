import React from 'react';

export default class ShoppingClassDemo extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      categories:[],
      products:[],
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  GetCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        categories: data,
      })
    })
  }
   GetProducts(url) {
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        products: data,
      })
    })
  }

  componentDidMount(){
    this.GetCategories();
     this.GetProducts('https://fakestoreapi.com/products');

  }

  handleCategoryChange(e){
    this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
  }

  render(){

    return(
      <div className="container-fluid">
        <header className='bg-danger p-2 text-white text-center'>
          <h2><span className='bi bi-cart'>Shopping Cart</span></h2>
        </header>
        <section className="row">
             <nav className="col-3">
              <h2>Select Categories</h2>
              <select onChange={this.handleCategoryChange} className='form-select'>
                   {
                    this.state.categories.map(category=>
                      <option key={category}>{category}</option>
                      
                    )
                   }
              </select>

             </nav>
             <main className='col-9'>
                <div className='d-flex flex-wrap'>
                      {
                        this.state.products.map(product=>
                          <div key={product.id} className='card m-2 p-2' style={{width:'200px',borderRadius:'25px',border:'2px solid black'}}>
                               <img src={product.image} className='card-img-top' alt="img" height='150px'/>
                               <div className='card-header' style={{height:'160px',borderRadius:'25px'}}>
                                <p>{product.title}</p>
                                
                               </div>
                          </div>

                          
                          )
                      }
                </div>
             </main>
        </section>

      </div>
    )
  }
}