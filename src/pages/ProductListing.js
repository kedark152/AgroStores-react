import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import "../styles/pages/productlist.css"
import { FiltersBar } from "../components/FiltersBar"
import { ProductCard } from "../components/ProductCard"
import {useState,useEffect} from "react";
import axios from "axios"
import { useProduct } from "../context/product-context"
import {filterProducts} from "../utils/filterProducts"



export const ProductListing = ()=>{
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([{}]);
    const {state} = useProduct();

    useEffect(() => {
      (async function prodLoader() {
        try {
          const response = await axios.get("/api/products");
          const getProducts = response.data.products;
          setLoader(false);
          setProducts(getProducts);
        } catch (error) {
          console.error(error);
        }
      })(); //IIFE - Immediately Invoked Function
    }, []);


    const displayProducts = filterProducts(state,products);
    console.log("dp",displayProducts);
    console.log("Display State",state);
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
