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
            <div key={item._id} className="items align-center">
              <input
                type="checkbox"
                name={item.categoryName}
                id={item._id}
                checked={filterState.categoryNames.includes(item.categoryName)}
                onChange={(e) =>
                  dispatchFilters({
                    type: "CATEGORIES",
                    payload: e.target.name,
                  })
                }
              />
              <label className="mg-xsm fw-bold" htmlFor={item._id}>
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
            <div key={item.id} className="items align-center">
              <input
                type="radio"
                name="star-ratings"
                id={item.star}
                checked={filterState.ratings == item.star}
                onChange={(e) =>
                  dispatchFilters({ type: "RATINGS", payload: e.target.id })
                }
              />
              <label className="mg-xsm fw-bold" htmlFor={item.title}>
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
          <div className="items align-center">
            <input
              type="radio"
              name="sort-radio"
              id="low-high"
              checked={filterState.sortBy === "PRICE-LOW-TO-HIGH"}
              onChange={() =>
                dispatchFilters({ type: "SORT", payload: "PRICE-LOW-TO-HIGH" })
              }
            />
            <label className="mg-xsm fw-bold" htmlFor="low-high">
              Low to High
            </label>
          </div>
          <div className="items align-center">
            <input
              type="radio"
              name="sort-radio"
              id="high-low"
              checked={filterState.sortBy === "PRICE-HIGH-TO-LOW"}
              onChange={() =>
                dispatchFilters({ type: "SORT", payload: "PRICE-HIGH-TO-LOW" })
              }
            />
            <label className="mg-xsm fw-bold" htmlFor="high-low">
              High to Low
            </label>
          </div>
        </div>
        {/* Hide Out of Stock */}
        <div className="filter-title mg-top-sm mg-bottom-xsm">
          <p className="para-md fw-bold">Out of Stock</p>
        </div>
        <div className="out-of-stock-filter">
          <div className="items align-center">
            <input
              type="checkbox"
              name="toggle-outstock"
              id="out-of-stock-toggle"
              checked={filterState.removeOutOfStock}
              onChange={() => dispatchFilters({ type: "REMOVE-OUT-OF-STOCK" })}
            />
            <label className="mg-xsm fw-bold" htmlFor="out-of-stock-toggle">
              Hide Out of Stock Products
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};
