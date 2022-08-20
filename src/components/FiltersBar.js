import { toast } from "react-toastify";
import { useProduct } from "../context/product-context";
import { GetFeaturedCategories } from "../services/getFeaturedCategories";

export const FiltersBar = () => {
  const { filterState, dispatchFilters } = useProduct();
  const ratingsInput = [
    {
      title: "4-star",
      label: "4 Stars & above",
      star: 4,
      id: "4S",
    },
    {
      title: "3-star",
      label: "3 Stars & above",
      star: 3,
      id: "3S",
    },
    {
      title: "2-star",
      label: "2 Stars & above",
      star: 2,
      id: "2S",
    },
    {
      title: "1-star",
      label: "1 Stars & above",
      star: 1,
      id: "1S",
    },
  ];

  return (
    <>
      <aside className="filters-sidebar flex-column pd-sm" id="filter-bar">
        <div className="filter-title align-center mg-top-xsm">
          <p className="para-md fw-bold filter-title">Filters</p>
          <p
            className="para-sm filter-clear-btn"
            onClick={() => {
              dispatchFilters({ type: "CLEAR-FILTERS" });
              toast.success("Filter Cleared!");
            }}
          >
            CLEAR
          </p>
        </div>
        <div className="filter-title mg-top-sm">
          <p className="para-md fw-bold">Price in ₹</p>
        </div>

        <div className="filter-price flex">
          <span id="price-min">200</span>
          <span id="price-mid">1000</span>
          <span id="price-max">2000</span>
        </div>
        <input
          step="200"
          type="range"
          min="200"
          max="2000"
          value={filterState.maxPriceRange}
          className="price-slider mg-left-xsm"
          id="price-range"
          onChange={(e) => {
            dispatchFilters({
              type: "PRICE-RANGE-FILTER",
              payload: e.target.value,
            });
          }}
        />

        {/* Categories Filter */}
        <div className="filter-title mg-top-sm mg-bottom-xsm">
          <p className="para-md fw-bold">Categories</p>
        </div>
        <div className="categories-filter">
          {GetFeaturedCategories().map((item) => (
            <div key={item._id} className="items">
              <label
                className="mg-y-xsm fw-bold align-center"
                htmlFor={item._id}
              >
                <input
                  type="checkbox"
                  name={item.categoryName}
                  id={item._id}
                  checked={filterState.categoryNames.includes(
                    item.categoryName
                  )}
                  onChange={(e) =>
                    dispatchFilters({
                      type: "CATEGORIES",
                      payload: e.target.name,
                    })
                  }
                />

                {item.categoryName}
              </label>
            </div>
          ))}
        </div>

        {/* Ratings */}
        <div className="filter-title mg-top-sm mg-bottom-xsm">
          <p className="para-md fw-bold">Ratings</p>
        </div>
        <div className="ratings-filter">
          {ratingsInput.map((item) => (
            <div key={item.id} className="items">
              <label
                className="mg-y-xsm fw-bold align-center"
                htmlFor={item.title}
              >
                <input
                  type="radio"
                  name="star-ratings"
                  id={item.title}
                  checked={filterState.ratings == item.star}
                  onChange={() =>
                    dispatchFilters({ type: "RATINGS", payload: item.star })
                  }
                />

                {item.label}
              </label>
            </div>
          ))}
        </div>
        {/* Sort-By */}
        <div className="filter-title mg-top-sm mg-bottom-xsm">
          <p className="para-md fw-bold">Sort By</p>
        </div>
        <div className="sort-by-filter">
          <div className="items">
            <label className="mg-y-xsm fw-bold align-center" htmlFor="low-high">
              <input
                type="radio"
                name="sort-radio"
                id="low-high"
                checked={filterState.sortBy === "PRICE-LOW-TO-HIGH"}
                onChange={() =>
                  dispatchFilters({
                    type: "SORT",
                    payload: "PRICE-LOW-TO-HIGH",
                  })
                }
              />
              Low to High
            </label>
          </div>
          <div className="items ">
            <label className="mg-y-xsm fw-bold align-center" htmlFor="high-low">
              <input
                type="radio"
                name="sort-radio"
                id="high-low"
                checked={filterState.sortBy === "PRICE-HIGH-TO-LOW"}
                onChange={() =>
                  dispatchFilters({
                    type: "SORT",
                    payload: "PRICE-HIGH-TO-LOW",
                  })
                }
              />
              High to Low
            </label>
          </div>
        </div>
        {/* Hide Out of Stock */}
        <div className="filter-title mg-top-sm mg-bottom-xsm">
          <p className="para-md fw-bold">Product Availability</p>
        </div>
        <div className="out-of-stock-filter">
          <div className="items ">
            <label
              className="mg-y-xsm fw-bold align-center"
              htmlFor="out-of-stock-toggle"
            >
              <input
                type="checkbox"
                name="toggle-outstock"
                id="out-of-stock-toggle"
                checked={filterState.removeOutOfStock}
                onChange={() =>
                  dispatchFilters({ type: "REMOVE-OUT-OF-STOCK" })
                }
              />
              Hide Out of Stock
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};
