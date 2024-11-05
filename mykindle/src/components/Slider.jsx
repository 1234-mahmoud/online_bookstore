// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
import "./swiper_style.css";
import pic1 from '../components/imgs/pic1.jpeg'
import pic2 from '../components/imgs/pic2.jpeg'
import pic3 from '../components/imgs/pic3.jpeg'
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
export default function Slider() {
  return (
    <div className="slider_cont">
      <h1>What Our Readers Says</h1>
      <div className="slider">
        {/* --------------------------------------------------------------------- */}
        <Swiper
          spaceBetween={30}
          loop={true}
          speed={1000}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperslide">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro
              incidunt sapiente, unde deleniti ad eligendi provident quasi,
              voluptates fugit."
            </p>
            <div className="slider_pic">
                <div className="pic">
                    <img src={pic1} alt="" />
                </div>
                <div className="reader_name">Mahmoud</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperslide">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro
              incidunt sapiente, unde deleniti ad eligendi provident quasi,
              voluptates fugit."
            </p>
            <div className="slider_pic">
                <div className="pic">
                    <img src={pic2} alt="" />
                </div>
                <div className="reader_name">Ali</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperslide">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro
              incidunt sapiente, unde deleniti ad eligendi provident quasi,
              voluptates fugit."
            </p>
            <div className="slider_pic">
                <div className="pic">
                    <img src={pic3} alt="" />
                </div>
                <div className="reader_name">Ahmed</div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
}
