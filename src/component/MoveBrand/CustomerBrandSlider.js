import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CustomBrandData} from './CustomBrandData'

export const CustomerBrandSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 50,
        slidesToShow: 6,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    CustomBrandData.map((customItem) => (
                        <div className="cus-content">
                            <img key={customItem.id} src={customItem.img} alt='/'/>
                        </div>

                    ))
                }
            </Slider>
        </div>
    );
}