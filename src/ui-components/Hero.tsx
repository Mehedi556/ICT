/* eslint-disable @typescript-eslint/no-explicit-any */
import 'swiper/css';
import { useRef } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
        <div className="max-w-[1024px] mx-2 sm:mx-2 lg:mx-auto">
        <div className='h-[40%] mt-3 p-2 bg-[#FFFFFF30] rounded-md'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[400px] w-[100%]" src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[400px] w-[100%]" src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[400px] w-[100%]" src={banner3} alt="" />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Hero