import axios from "axios";
import {useState,useEffect} from "react";


export const GetProducts = ()=>{
  const [loader, setLoader] = useState(true);
const [products, setProducts] = useState([{}]);


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
  return {loader,products};
}
