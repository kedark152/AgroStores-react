import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/pages/home.css"
import { FeaturedCategories } from "../components/FeaturedCategories";
import { getFeaturedCategories } from "../utils/getFeaturedCategories";

export const Home = ()=>{
    return(
    <>
        <Navbar/>
            <div className="Home">
                    {/* Header Image */}
                <header className="hero-header">
                <div className="header-content flex-column-center">
                    <h1 className="banner-title lt-sp-2 mg-top-md text-center">
                    One Stop Solution for your farming needs
                    </h1>
                    <h2 className="banner-subtitle lt-sp-1 text-center">
                    Buy Fertilizers, Insectisides, Seeds & other Agriculture Products
                    </h2>
                    <a
                    href="./pages/products.html"
                    className="btn btn-solid btn-shop-now mg-lg btn-grad"
                    >
                    Shop Now
                    </a>
                </div>
                </header>
                <h2 className="text-center mg-top-md">Featured Categories</h2>
                <div className="title-underline"></div>
                <div className="categories">
                  {getFeaturedCategories().map((item) =>
                  <FeaturedCategories key={item._id}  imgSrc={item.imgSrc} categoryTitle={item.categoryName}/> 
                )}
                </div>
            </div>
        <Footer/>
    </>
    )
}
