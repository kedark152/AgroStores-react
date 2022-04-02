import { Navbar,Footer,FiltersBar,ProductCard } from "../components/allComponents"
import "../styles/pages/productlist.css"
import { useProduct } from "../context/product-context"
import {filterProducts} from "../utils/filterProducts"
import { GetProducts } from "../services/getProducts"

export const ProductListing = ()=>{
    
    const {filterState} = useProduct();

    // GetProducts() is fetching Products from Backend
    const {loader,products} = GetProducts();

    const displayProducts = filterProducts(filterState,products);
    return(
        <>
        <Navbar/>
      
     <div className="product-container-main">

        {/* Filters Side-Bar  */}
        <FiltersBar/>
        {/* Product Cards  */}
        <div className="fs-md">{loader && "Loading Products..."}</div>
        <div className="fs-md">{displayProducts.length==0 && "No Products Found"}</div>
      <div className="products-list">
        {/* Card */}
       {displayProducts.map((item)=><ProductCard key={item._id} cardDetails={item}/>)}
     
      </div>
     </div>
   {/* Filter on Mobile Button  */}
    <a href="#filter-bar" className="btn-float-action btn-filter-float">
      <i className="material-icons" id="filter-icon">filter_alt</i>
    </a>
        <Footer/>            
        
        </>
    )
}
