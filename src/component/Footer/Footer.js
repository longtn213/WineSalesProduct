import logo from "../../image/logo/winelogo-trans.png";
import notWine from "../../image/no-wine/no-wine-footer.png";
import facebook from "../../image/social/ruoutot-social-facebook.png";
import instagram from "../../image/social/ruoutot-social-ista.png";
import twitter from "../../image/social/ruoutot-social-twitter.png";
import youtube from "../../image/social/ruoutot-social-youtube.png";
import zalo from "../../image/social/ruoutot-social-zalo.png";
import visa from "../../image/payment/icon__payment-visa.png";
import mastercard from "../../image/payment/icon__payment-mastercard.png";
import american from "../../image/payment/icon__payment-american.png";
import paypal from "../../image/payment/icon__payment-paypal.png";
import './Footer.css'

function Footer() {
    return (
        <div className="footer_main">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-content__section">
                            <h3 className="footer-content__title">
                                <span>CHÍNH SÁCH</span>
                            </h3>
                            <div className="footer-content__list">
                            <span>
                                Chính Sách Hoàn Tiền
                            </span>
                                <span>
                                Chính Sách Giao Hàng
                            </span>
                                <span>
                                Chính Sách Đổi Trả - Bảo Hành
                            </span>
                                <span>
                                Bảo Mật Thông Tin Khách Hàng
                            </span>
                                <span>
                                Phương Thức Thanh Toán
                            </span>
                                <span>
                                Xử Lý Khiếu Nại
                            </span>
                            </div>
                        </div>
                        <div className="footer-content__section">
                            <h3 className="footer-content__title">
                                <span>Dịch vụ &amp; Hỗ trợ</span>
                            </h3>
                            <div className="footer-content__list">
                            <span>
                                Theo Dõi Đơn Hàng
                            </span>
                                <span>
                                Câu Hỏi Thường Gặp
                            </span>
                                <span>
                                Dịch Vụ Kỹ Thuật
                            </span>
                                <span>
                                Đánh Giá
                            </span>
                            </div>
                        </div>
                        <div className="footer-content__section ">
                            <h3 className="footer-content__title ">
                                <span>Chi nhánh toàn quốc</span>
                            </h3>
                            <div className="footer-content__list">
                                <span>
                                    Ý - Việt IVCOM Rượu Nhập Khẩu & Phân phối độc quyền tại Việt Nam
                                </span>
                            </div>
                        </div>
                        <div className="footer-content__section information">
                            <h3 className="footer-content__title">
                                <span>Thông tin chủ quán</span>
                            </h3>
                            <div className="footer-content__list">
                                <div className="footer-content__item">
                                    <img className="footer-content__img" src={logo} alt="/"/>
                                </div>
                                <div className="footer-content__item">
                                    <img className="footer-no-wine" src={notWine} alt="/"/>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content__section">
                            <h3 className="footer-content__title ">
                                <span>Danh mục rượu</span>
                            </h3>
                            <div className="footer-content__list">
                                <span className="footer-content__link">
                                    Video
                                </span>
                                <span className="footer-content__link">
                                    Rượu Vang
                                </span>
                                <span className="footer-content__link">
                                    Vang cao cấp
                                </span>
                                <span className="footer-content__link">
                                    Vang Bịch
                                </span>
                                <span className="footer-content__link">
                                    Rượu Vang Ngọt
                                </span>
                                <span className="footer-content__link">
                                    Vang Tây Ban Nha
                                </span>
                                <span className="footer-content__link">
                                    Vang Úc
                                </span>
                                <span className="footer-content__link">
                                    Vang Pháp
                                </span>
                                <span className="footer-content__link">
                                    Vang Ý
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer-content__section">
                            <h3 className="footer-content__title">
                                <span>Đề nghị hợp tác</span>
                            </h3>
                            <div className="footer-content__list">
                                <span>
                                    Chính Sách Đại Lý
                                </span>
                                <span>
                                    Chính Sách Cộng Tác Viên
                                </span>
                                <span>
                                    Trở Thành Chi Nhánh
                                </span>
                                <span>
                                    Tuyển Dụng
                                </span>
                            </div>
                        </div>
                        <div className="footer-content__section">
                            <h3 className="footer-content__title">
                                <span>Dịch vụ đặc biệt</span>
                            </h3>
                            <div className="footer-content__list ">
                                <span>
                                    In Tên Doanh Nghiệp
                                </span>
                                <span>
                                    Tặng Quà Từ Xa
                                </span>
                                <span>
                                    Thuê Ly - Decante
                                </span>
                                <span>
                                    Tạo Thẻ Thành Viên
                                </span>
                            </div>
                        </div>
                        <div className="footer-content__section">
                            <h3 className="footer-content__title">
                                <span>Giới thiệu</span>
                            </h3>
                            <div className="footer-content__list  ">
                                <span>
                                    Quá Trình Phát Triển
                                </span>
                                <span>
                                    Tôn Chỉ Hoạt Động
                                </span>
                                <span>
                                    Mặt Hàng Kinh Doanh
                                </span>
                                <span>
                                    Tầm Nhìn Doanh Nghiệp
                                </span>
                            </div>
                        </div>
                        <div className="footer-content__section information">
                            <div className="footer-content-detail">
                                <p>Trụ sở chính: Số 9 Liễu giai, Ba Đình , Hà Nội</p>
                                <p>
                                    <a href="tel:0971521768" target="">Hotline: 0971.521.768</a>
                                </p>
                                <p>
                                    <a href="tel:0942943368" target="">Tel: 0942.943.368</a>
                                </p>
                                <p>
                                    <a href="mailto:ruoubiatot@gmail.com" target="">Mail:
                                        ruoubiatot@gmail.com</a>
                                </p>
                                <p>
                                    Công ty TNHH Dịch Vụ và Thương Mại Toàn Thịnh
                                </p>
                                <p>
                                    GPKD số 0108013734 do Sở KH và ĐT TP Hà Nội cấp ngày 09/10/2017
                                </p>
                                <p>
                                    Giấy phép bán lẻ rượu số 14/GP-PKT(BL) do phòng Kinh Tế UBND quận Đống Đa cấp
                                    ngày 29/10/2019
                                </p>
                            </div>

                            <div className="footer-content__item pb-2">
                                <h4 className="footer-content__sub-title">Social</h4>
                                <div className="footer-social__container">
                                    <a className="footer-content__social"
                                       href="" target="">
                                        <img alt="facebook"
                                             src={facebook}
                                             className="default_img"/>
                                    </a>
                                    <a className="footer-content__social"
                                       href="">
                                        <img alt="instagram"
                                             src={instagram}
                                             className="default_img"/>
                                    </a>
                                    <a className="footer-content__social" href=""
                                       target="">
                                        <img alt="twitter"
                                             src={twitter}
                                             className="default_img"/>
                                    </a>
                                    <a className="footer-content__social"
                                       href="" target="">
                                        <img alt="youtube"
                                             src={youtube}
                                             className="default_img"/>
                                    </a>
                                    <a className="footer-content__social-link" href=""
                                       target="">
                                        <img alt="zalo"
                                             src={zalo}
                                             className="default_img default_zalo"/>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-content__item pb-2">
                                <h4 className="footer-content__sub-title">We Accept</h4>
                                <div className="footer-payment">
                                    <img className="footer-content__image"
                                         src={visa}
                                         alt="Visa"
                                    />
                                    <img className="footer-content__image"
                                         src={mastercard}
                                         alt="Mastercard" width="34" height="23"
                                    />
                                    <img className="footer-content__image"
                                         src={american}
                                         alt="American Express" width="34" height="23"
                                    />
                                    <img className="footer-content__image"
                                         src={paypal}
                                         alt="PayPal" width="34" height="23"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="footer-content__section">
                            <div className="footer-content__list">
                                <span className="footer-content__link">
                                    Vang Chile
                                </span>
                                <span className="footer-content__link">
                                    Champagne
                                </span>
                                <span className="footer-content__link">
                                    Vang hồng
                                </span>
                                <span className="footer-content__link">
                                    Rượu vang trắng
                                </span>
                                <span className="footer-content__link">
                                    Vang đỏ
                                </span>
                                <span className="footer-content__link">
                                    Bia Nhập Khẩu
                                </span>
                                <span className="footer-content__link">
                                    Bia Chimay
                                </span>
                                <span className="footer-content__link">
                                    Leffe
                                </span>
                                <span className="footer-content__link">
                                    Liên hệ
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy_right">
                <div className="container">
                    <div className="copy_right_ct">
                        <strong>THƯỞNG THỨC CÓ TRÁCH NHIỆM</strong>
                        <span>Các sản phẩm rượu không dành cho người dưới 18 tuổi và phụ nữ đang mang thai.</span>
                        <span>Bản quyền © 2023 IVCOM - Rượu vang nhập khẩu. Hiện thân của sự cống hiến không ngừng để đạt tới sự hoàn hảo</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer