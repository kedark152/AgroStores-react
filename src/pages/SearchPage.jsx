/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Footer } from "../components/allComponents";
import "../styles/pages/cart.css";
import { useState } from "react";
import { ProductCard } from "../components/allComponents";
import { GetProducts } from "../services/getProducts";
import "../styles/pages/searchPage.css";
import { DebounceInput } from "react-debounce-input";

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
        {/* <Mobile SearchBar /> */}
        <div className="search-mobile-field">
          <i className="material-icons" id="search-mobile-icon">
            search
          </i>
          <DebounceInput
            minLength={2}
            debounceTimeout={500}
            type="text"
            name="search-bar"
            id="search-mobile-bar"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

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
