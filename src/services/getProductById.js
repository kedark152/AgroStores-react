import axios from "axios";
import { useState, useEffect } from "react";

export const GetProductById = (productId) => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState([{}]);

  useEffect(() => {
    (async function productById() {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        const getProduct = response.data.product;
        setLoader(false);
        setProduct(getProduct);
      } catch (error) {
        console.log("Error from getProductById.js ", error);
      }
    })(); //IIFE - Immediately Invoked Function
  }, [productId]);

  return { loader, product };
};
