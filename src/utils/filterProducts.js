
export const filterProducts = (filterState, productList) => {
    //Filter-Products-by-Categories
    if(filterState.categoryNames.length>0){
        let prodList =[] ;
           filterState.categoryNames.map(name=>
            prodList = prodList.concat(productList.filter((item) => item.categoryName === name)))
        productList = [...prodList];
    }        
    
    //Below for Price Range filter
        productList = productList.filter(
            (item) => Number(item.price) < Number(filterState.maxPriceRange)
        );
     //Ratings filter   
        productList = productList.filter(
            (item) => (item.rating) >= (filterState.ratings)
        );
    //Sort-By-Price
        if (filterState.sortBy === "PRICE-LOW-TO-HIGH") {
        productList = productList.sort((a, b) => a.price - b.price);
        }
        if (filterState.sortBy === "PRICE-HIGH-TO-LOW") {
        productList = productList.sort((a, b) => b.price - a.price);
        }
     //Hide-Out-Of-Stock   
        if (filterState.removeOutOfStock) {
        productList = productList.filter((item) => !item.isOutOfStock);
        }       
        
    return productList;
  };
