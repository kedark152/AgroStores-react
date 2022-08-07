import {
  Navbar,
  Footer,
  FiltersBar,
  ProductCard,
} from "../components/allComponents";
import "../styles/pages/productlist.css";
import { useProduct } from "../context/product-context";
import { filterProducts } from "../utils/filterProducts";
import { GetProducts } from "../services/getProducts";
import { useState } from "react";
import { Loader } from "../components/Loader";

export const ProductListing = () => {
  const { filterState } = useProduct();
  let windowWidth = window.innerWidth;

  // GetProducts() is fetching Products from Backend
  const { loader, products } = GetProducts();

  //Sidebar Toggler for Mobile Devices
  const [toggler, setToggler] = useState(windowWidth > 800);
  const toggleSetter = () =>
    toggler === true ? setToggler(false) : setToggler(true);

  //Array list to display products
  const displayProducts = filterProducts(filterState, products);

  return (
    <>
      <Navbar />

      <div className="product-container-main">
        {/* Filters Side-Bar  */}
        {toggler && <FiltersBar />}

        {/* Product Cards  */}

        <div className="fs-md">{loader && <Loader />}</div>
        <div className="fs-md">
          {!loader && displayProducts.length == 0 && "No Products Found"}
        </div>
        <div className="products-list">
          {/* Card */}
          {displayProducts.map((item) => (
            <ProductCard key={item._id} cardDetails={item} />
          ))}
        </div>
      </div>
      {/* Filter on Mobile Button  */}
      <a
        href="#filter-bar"
        className="btn-float-action btn-filter-float"
        onClick={() => toggleSetter()}
      >
        <i className="material-icons" id="filter-icon">
          {toggler ? `filter_alt_off` : `filter_alt`}
        </i>
      </a>
      <Footer />
    </>
  );
};
