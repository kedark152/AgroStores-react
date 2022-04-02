/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import {useProduct} from "../context/product-context"

function FeaturedCategories({imgSrc,categoryTitle}){
        const {dispatchFilters} = useProduct();
    return(
        <div className="category-items">
                
                <Link to="/products" onClick={()=>dispatchFilters({type:"HOME-CATEGORIES-LINK",payload:categoryTitle})}>
                <p className="category-item-text para-lg fw-bold">{categoryTitle}</p>
                <img
                    className="img-responsive"
                    src={imgSrc}
                    alt={categoryTitle}
                />
                </Link>
            </div>
    )
}

export {FeaturedCategories};
