
export const filterReducer = (state, {type,payload}) => {
  switch (type) {
    case "SORT": 
      return { ...state, sortBy: payload };
    case "REMOVE-OUT-OF-STOCK": 
      return { ...state, removeOutOfStock: !state.removeOutOfStock };
    case "PRICE-RANGE-FILTER": 
      return { ...state, maxPriceRange: payload };
    case 'RATINGS':
      return { ...state, ratings: payload };
    case 'CATEGORIES':
        return { ...state, categoryNames: getTickedNames(state,payload) }
    case 'HOME-CATEGORIES-LINK':
        return { ...state, categoryNames: [payload] }
    case 'CLEAR-FILTERS':
      return filterInitialState;
  

    default: state;
  }
};

export const filterInitialState = {
  sortBy: null,
  removeOutOfStock: false,
  maxPriceRange: 3000,
  ratings:0,
  categoryNames:[]

};

const getTickedNames = (state,payload)=>{
  let stateCategoryNames =state.categoryNames; 
  if(stateCategoryNames.includes(payload)){   
    return stateCategoryNames.filter(name=>name!==payload);
    }
  else{
    return [...state.categoryNames,payload];
  }

}
