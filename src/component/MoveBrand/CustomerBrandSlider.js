import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 50,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
            </Slider>
        </div>
    );
}