import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/pages/home.css"
import { FeaturedCategories } from "../components/FeaturedCategories";
export const Home = ()=>{

    const featuredCategories = [
    {category:"item-1",
    title:"Fertilizers",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390941/fertilizers1_hdthei.jpg"},
    {category:"item-2",
    title:"Pesticides",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390940/pesticides1_pveijq.jpg"},
    {category:"item-3",
    title:"Farming Tools",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390940/tools_emqkuu.jpg"},
    {category:"item-4",
    title:"Seeds",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390941/seeds_tqx9ub.jpg"},
    {category:"item-5",
    title:"Safety Wearables",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648395553/farmer-spraying-rice_720x480_p9nhyb.webp"},
    {category:"item-6",
    title:"Electronic Devices",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648397135/probeInSoil_1_cropped_s81abe.jpg"},
]

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
                  {featuredCategories.map((item) =>
                  <FeaturedCategories key={item.category}  imgSrc={item.imgSrc} categoryTitle={item.title}/> 
                )}
                </div>
            </div>
        <Footer/>
    </>
    )
}
