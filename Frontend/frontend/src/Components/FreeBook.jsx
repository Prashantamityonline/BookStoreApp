import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React,{useEffect, useState} from 'react';
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  return (<>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aspernatur atque pariatur, repellat alias quis eveniet praesentium ipsum tempore, eligendi error quia sed velit nesciunt reprehenderit doloremque minus, voluptates dignissimos odit eius! Debitis esse maxime, repellat laudantium sit illo! Fuga nam nesciunt quia eos quae molestias incidunt corrupti officia illo?</p>
    </div>
    <div>
    <Slider {...settings}>
       {filterData.map((item)=>
      <Cards item={item} key={item.id} />
      )}
      </Slider>
    </div>
  

   
    </>
  )
}

export default FreeBook;