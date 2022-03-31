import axios from "axios";
import { useState, useEffect } from "react";

export const GetFeaturedCategories = ()=>{
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        (async function categoriesLoader(){
            try{
                const response = await axios.get("/api/categories");
                const getCategories = (response.data.categories);
                setCategories(getCategories);
            }
            catch (error){
              console.log("getFeaturedCategories.js Error:",error);
            }
        })();
    },[]);
    return categories;
}
