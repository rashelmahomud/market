// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img from '../../public/new-project/Banner.jpg';
import img1 from '../../public/new-project/Banner1.jpg';
import img2 from '../../public/new-project/Banner2.jpg';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide>

                <Image src={img} alt='image' />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={img1} alt='image' />

            </SwiperSlide>

            <SwiperSlide>
                <Image src={img2} alt='image' />

            </SwiperSlide>
        </Swiper>
    )
};

export default Banner;