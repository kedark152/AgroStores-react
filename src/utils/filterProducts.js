
export const filterProducts = (state, productList) => {
    //Filter-Products-by-Categories
    if(state.categoryNames.length>0){
        let prodList =[] ;
           state.categoryNames.map(name=>
            prodList = prodList.concat(productList.filter((item) => item.categoryName === name)))
        productList = [...prodList];
    }        
    
    //Below for Price Range filter
        productList = productList.filter(
            (item) => Number(item.price) < Number(state.maxPriceRange)
        );
     //Ratings filter   
        productList = productList.filter(
            (item) => (item.rating) >= (state.ratings)
        );
    //Sort-By-Price
        if (state.sortBy === "PRICE-LOW-TO-HIGH") {
        productList = productList.sort((a, b) => a.price - b.price);
        }
        if (state.sortBy === "PRICE-HIGH-TO-LOW") {
        productList = productList.sort((a, b) => b.price - a.price);
        }
     //Hide-Out-Of-Stock   
        if (state.removeOutOfStock) {
        productList = productList.filter((item) => !item.isOutOfStock);
        }       
        
    return productList;
  };
