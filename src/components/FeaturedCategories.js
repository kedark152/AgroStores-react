/* eslint-disable react/prop-types */

function FeaturedCategories({imgSrc,categoryTitle}){
    return(
        <div className="category-items">
                <p className="category-item-text para-lg fw-bold">{categoryTitle}</p>
                <img
                    className="img-responsive"
                    src={imgSrc}
                    alt={categoryTitle}
                />
            </div>
    )
}

export {FeaturedCategories};
