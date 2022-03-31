
// eslint-disable-next-line react/prop-types
export const ProductCard =({cardDetails}) =>{
  // eslint-disable-next-line react/prop-types
  const {title, imgUrl,price,price_old,discount, rating,  isBestSeller,  isOutOfStock} = cardDetails;
    return (
            <>
             {/* Card  */}
        <div className="card card-vertical prod-item-1">
            { isBestSeller && <span className="card-badge-green">Best Seller</span>}
            { isOutOfStock && <div className="card-overlay-container">
                <div className="card-overlay-text">Out of Stock</div>
               </div> }
          <i className="material-icons heart-icon">favorite_border</i>
          <div className="card-img-box">
            <a href="#">
              <img
                src={imgUrl}
                alt={title}
                className="card-img"
              />
            </a>
          </div>
          <div className="card-title">
            <h4>
             {title}
            </h4>
          </div>
          <p className="card-ratings">{rating} <i className="material-icons">star</i></p>
          <div className="card-pricing">
            <p className="card-price">₹{price}</p>
            <p className="card-price-cut">₹{price_old}</p>
            <p className="card-percent-discount">{discount}% off</p>
          </div>
          <a href="#" className="btn btn-solid-icon fw-bold">
            <i className="material-icons">shopping_cart</i>
            Add to Cart
          </a>
        </div>
    </>
    )
}
