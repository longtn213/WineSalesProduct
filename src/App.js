import './Base.css';
import './App.css';
import Header from './component/Header/Header'
import slider1 from './image/slider/slider1.png'
import slider2 from './image/slider/slider2.png'
import slider3 from './image/slider/slider3.png'
import slider4 from './image/slider/slider4.png'
import flash_sale from './image/flashsale/flash-sale.png'
import ship from './image/location/ship.png'
import {category_data} from "./categoryData"
import {locationData} from "./locationData"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Footer from './component/Footer/Footer'
import ProductWine from './component/ProductWine/ProductWine'
import {CustomerBrandSlider} from './component/MoveBrand/CustomerBrandSlider'
function App() {


    return (
        <div className="App">
            <Header/>
            <div className="container">
                <div className="row intro">
                    <div className="columns-xs-6 col-sm-3">
                        <div className="slider_content">
                            <img className="slide_img" src={slider1} alt='/'/>
                            <span className="slide_title">
                                <a href='/'> Liên hệ</a>
                            </span>
                        </div>
                    </div>
                    <div className="columns-xs-6 col-sm-3">
                        <div className="slider_content">
                            <img className="slide_img" src={slider2} alt='/'/>
                            <span className="slide_title">
                                <a href='/'> Thương hiệu A - Z</a>
                            </span>
                        </div>

                    </div>
                    <div className="columns-xs-6 col-sm-3">
                        <div className="slider_content">
                            <img className="slide_img" src={slider3} alt='/'/>
                            <span className="slide_title">
                                <a href='/'> Vang ngọt</a>
                            </span>
                        </div>

                    </div>
                    <div className="columns-xs-6 col-sm-3">
                        <div className="slider_content">
                            <img className="slide_img" src={slider4} alt='/'/>
                            <span className="slide_title">
                                <a href='/'> Bia nhập</a>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="title">
                    <h2 className="title_box">
                        <img className="flash_sale-img" src={flash_sale} alt='/'/>
                        Sản phẩm Rượu
                    </h2>
                    <span> Siêu khuyến mãi có hạn</span>
                </div>
                {/*Sản phẩm bán*/}
                <div className="sale-product">
                    <ProductWine/>
                </div>
                <div className="category_general">
                    <div className="title">
                        <h2 className="title_box">
                            Danh mục
                        </h2>
                    </div>
                    <div className="row">
                        {category_data.map((categoryItem) => (
                            <div className="col-sm-4">
                                <div className="category_detail">
                                    <div className="category_item">
                                        <img className="category_img" id={categoryItem.id} src={categoryItem.img}
                                             alt="/"/>
                                        <span>{categoryItem.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="location_general">
                    <div className="title">
                        <h2 className="title_box">
                            Hệ thống bán hàng của IV Com - Rượu vang nhập khẩu
                        </h2>
                        <span>Quý khách mua hàng có thể liên hệ khu vực gần nhất</span>
                    </div>
                    <div className="row">
                        {locationData.map((locationItem) => (
                            <div className="col-sm-6">
                                <div className="location_detail" id={locationItem.id}>
                                    <h4>{locationItem.locationName}</h4>
                                    <ul>
                                        <li>
                                            <LocationOnIcon/>
                                            <strong>{locationItem.locationShop}</strong>
                                            <span>{locationItem.locationAddress}</span>
                                        </li>
                                        <li>
                                            <PhoneIcon/>
                                            <strong>
                                                <a href={locationItem.phoneNumber1}>{locationItem.phoneNumber1} - </a>

                                                <a href={locationItem.phoneNumber2}>{locationItem.phoneNumber2}</a>
                                            </strong>
                                        </li>
                                        <li>
                                            <MailIcon/>
                                            <strong>
                                                <a href={locationItem.mail}>{locationItem.mail}</a>
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ship">
                        <span>Ship hàng nhanh trong giờ - Giao hàng nhanh toàn quốc</span>
                        <img src={ship} alt='/'/>
                    </div>
                </div>
                <div className="Intro_customer">
                    <div className="title">
                        <h2 className="title_box">
                            Khách hàng thân thiết
                        </h2>
                    </div>
                    <CustomerBrandSlider/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
