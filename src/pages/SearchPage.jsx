/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Footer } from "../components/allComponents";
import "../styles/pages/cart.css";
import { useState } from "react";
import { ProductCard } from "../components/allComponents";
import { GetProducts } from "../services/getProducts";
import { Loader } from "../components/Loader";
import "../styles/pages/searchPage.css";

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loader, products } = GetProducts();
  let displayProducts = [];
  if (!loader && searchQuery.length > 1) {
    displayProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
  }
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      {/* <!-- main-body --> */}
      <div className="search-page-body">
        <h2 className="text-center pd-md serach-heading">Search Page</h2>
        <h3 className="text-center">
          {searchQuery.length > 1
            ? `Search Query: "${searchQuery}"`
            : `Please type in search field to find products`}
        </h3>
        <h4 className="fs-md mg-top-sm text-center">
          {!loader &&
            displayProducts.length == 0 &&
            searchQuery.length > 1 &&
            "No Products Found"}
        </h4>
        {loader && <Loader />}
        {!loader && (
          <div className="search-container-main flex mg-bottom-md mg-top-md">
            {displayProducts.map((item) => (
              <ProductCard key={item._id} cardDetails={item} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
