import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Movie/Borat2/SENG_2020_GWBleedingHero_1500x600_POST_Final_noLocale_PVD5758_BoratSubsequentMovieFilm._CB419276238_.jpg" 
                    alt=""
                />
           
                <div className="home__row">
                    <Product
                        id="1052555" 
                        title='Thermometre' 
                        price={859.99} 
                        image=
                            "https://images-na.ssl-images-amazon.com/images/I/61Cs5qXObkL._AC_UL200_SR200,200_.jpg"
                        rating={3}
                    />
                    <Product 
                    id="105855555" 
                    title='Bean Bag' 
                    price={9.99} 
                    image=
                        "https://m.media-amazon.com/images/I/91Un6TCKThL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                     id="1058552222" 
                     title='alexa mini' 
                     price={129.99} 
                     image=
                         "https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                     rating={4}
                    />
                    <Product 
                     id="105855555" 
                     title='Speaker' 
                     price={29.99} 
                     image=
                         "https://images-na.ssl-images-amazon.com/images/I/71fnXKyRa4L._AC_UL200_SR200,200_.jpg"
                     rating={4}
                    />
                    <Product
                     id="105855555" 
                     title='Amzon   Tablet' 
                     price={29.99} 
                     image=
                         "https://images-na.ssl-images-amazon.com/images/I/51y1gmIGCqL._AC_UL200_SR200,200_.jpg"
                     rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product id="102755555" 
                        title='Chess Game Yellow Mountain Imports'
                        price={29.99} 
                        image=
                            "https://m.media-amazon.com/images/I/81CaXQWzP9L._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>
            </div>            
        </div>
    )
}

export default Home
