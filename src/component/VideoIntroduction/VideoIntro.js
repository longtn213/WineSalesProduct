import './VideoIntro.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
function VideoIntro () {
    return (
        <div className="video-intro">
            <div className="video_general">
                <div className="row">
                    <div className="col-sm-7 video-left">
                        <a href="https://www.youtube.com/watch?v=TAlL2cPoAQ8" className="video-main">
                            <div className="news-wrap_figure">
                                <figure>
                                    <img loading="lazy" className="alignnone size-full wp-image-224 safelyLoadImage"
                                         alt="banner"
                                         src="https://ruoutot.net/s/product/danh-muc-ruou-vang-nam-phi.jpg"/>
                                    <PlayCircleOutlineIcon sx={{ fontSize: 80 }} className="video-play__icon"/>
                                </figure>

                            </div>
                            <div className="news-text_widget__left">
                                <h3><span>Tìm hiểu điểm đặc biệt của vang Nam Phi</span></h3>
                                <span className="qb_date_post">2023-07-17 16:11:03</span>
                                <span className="excerpt">Tìm hiểu điểm đặc biệt của vang Nam Phi &nbsp; Nhắc tới Nam Phi, chúng ta...</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-5">
                        <div className="ct_right">
                            <div className="video-details__right">
                                <div className="wrap-figure__right">
                                    <figure>
                                        <a aria-label="Tìm hiểu rượu vang Đức nhiều cấp độ ngọt" className="fancybox"
                                           href="https://www.youtube.com/watch?v=7Qozz5d7WUs">
                                            <img alt="banner"
                                                 src="https://ruoutot.net/s/product/danh-muc-ruou-vang-duc-germany.jpg"/>
                                        </a>
                                        <PlayCircleOutlineIcon sx={{ fontSize: 80 }} className="video-icon_right"/>
                                    </figure>
                                </div>
                                <div className="text-widget_right">
                                    <h3><a href="https://ruoutot.net/tim-hieu-ruou-vang-duc">Tìm hiểu rượu vang Đức
                                        nhiều cấp độ ngọt</a></h3>
                                    <span className="text-right_time">2023-07-17 10:41:50</span>
                                    <span className="text-right_content">Tìm hiểu rượu vang Đức nhiều cấp độ ngọt Liên bang Đức, một đất nước...</span>
                                </div>
                            </div>
                            <div className="video-details__right">
                                <div className="wrap-figure__right">
                                    <figure>
                                        <a aria-label="Tìm hiểu toàn bộ rượu vang Hungary" className="fancybox"
                                           href="https://www.youtube.com/watch?v=sCYUypd-4Vo">
                                            <img alt="banner"
                                                 src="https://ruoutot.net/s/product/danh-muc-ruou-vang-hungary.jpg"/>
                                        </a>
                                    </figure>
                                    <PlayCircleOutlineIcon sx={{ fontSize: 80 }} className="video-icon_right"/>
                                </div>
                                <div className="text-widget_right">
                                    <h3><a href="https://ruoutot.net/tim-hieu-vang-hungary">Tìm hiểu toàn bộ rượu
                                        vang Hungary</a></h3>
                                    <span className="text-right_time">2023-07-15 18:00:04</span>
                                    <span className="text-right_content">Tìm hiểu toàn bộ rượu vang Hungary Hungary, một đất nước ở trung tâm châu...</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <a href="https://ruoutot.net/video" className="news_read_more">Xem thêm</a>
        </div>
    )
}
export default VideoIntro