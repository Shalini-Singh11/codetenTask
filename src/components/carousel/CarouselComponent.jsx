import { useState } from "react";
import Slider from "react-slick";

// Import your images
import img1 from "../../assets/1.webp";
import img2 from "../../assets/3.webp";
import img3 from "../../assets/4.webp";
import img4 from "../../assets/5.webp";
import img5 from "../../assets/10.webp";
import img6 from "../../assets/8.webp";
import img7 from "../../assets/9.webp";
import img8 from "../../assets/7.webp";
import img9 from "../../assets/12.webp";
import img10 from "../../assets/11.webp";

// Define the images and title array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const titles = [
  { title: "Rabbit Character 1" },
  { title: "Rabbit Character 2" },
  { title: "The Moonshooter Series" },
  { title: "Angry Duck Character" },
  { title: "Rabbit Raiders" },
  { title: "Rabbit Character 6" },
  { title: "Character 7" },
  { title: "Character 8" },
  { title: "Character 9" },
  { title: "Character 10" },
];

function CarouselComponent() {
  const [imageIndex, setImageIndex] = useState(0);

  //=========== Slider settings ========
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          centerMode: false, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          centerMode: false, 
        },
      },
    ],
  };

  return (
    <div className="App carousel-app">
      <Slider {...settings}>
        {images.map((img, idx) => {
          let scaleClass = "scale-03";

          if (idx === imageIndex) {
            scaleClass = "scale-1";
          } else if (idx === imageIndex - 1 || idx === imageIndex + 1) {
            scaleClass = "scale-06";
          }

          return (
            <div className={`slide ${scaleClass}`} key={idx}>
              <img src={img} alt={`carousel-item-${idx}`} />
              {idx === imageIndex && (
                <div className="title">
                  <p>{titles[idx].title}</p>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselComponent;
