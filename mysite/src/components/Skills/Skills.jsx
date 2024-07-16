import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Skills.scss';
import { slides } from "../../mockData/Slideimages";
import Title from "../Title/Title";
export default function Skills() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768, // Mobile screen width
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 579, // Mobile screen width
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
      ]
  };
  return (
    <div className="react-slick">
      <Title title="Skills"/>

    <Slider {...settings}>
        {slides.length > 0 && slides.map(slideimg => <div className="images">
        <img src={slideimg.img} alt="image" />
      </div>)}
    </Slider>
    </div>
  );
}