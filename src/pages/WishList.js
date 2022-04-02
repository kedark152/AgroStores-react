
import { Navbar,Footer,ProductCard } from "../components/allComponents"
import { useWishList } from "../context/wishlist-context";
import "../styles/pages/wishlist.css"

export const WishList = () =>{
    const {wishListState} = useWishList();
    const displayWishListProducts = wishListState.wishlistItems;
    const wishListCount = displayWishListProducts.length;
    return(<>
    <Navbar/>
   
    {/* <!-- Main Body --> */}
    <div className="wishlist-body">
    <h2 className=" text-center pd-md">{wishListCount>0 ? `My Wishlist (${wishListCount})`:`Your Wishlist is Empty`}</h2>
    <div className="wishlist-container-main flex mg-bottom-md mg-top-md">
      {displayWishListProducts.map((item)=><ProductCard key={item._id} cardDetails={item}/>)}
    </div>
    </div>
    <Footer/>
    </>)
}