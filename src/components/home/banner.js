// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/banner.module.css";
import img from "../../../public/new-project/Banner.jpg";
import img1 from "../../../public/new-project/Banner1.jpg";
import img2 from "../../../public/new-project/Banner2.jpg";
import img3 from "../../../public/new-project/img3.png";
// Import Swiper styles
// import 'swiper/css';
import Image from "next/image";

export const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.gallery}>
        <div className={styles.gallery}>
          <Image className="w-full h-1/2 absolute" src={img3} alt="image" />
          <Image className="w-full h-1/2  " src={img1} alt="image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.gallery}>
          <Image className="w-full h-1/2 absolute" src={img2} alt="image" />
          <Image className="w-full h-1/2  " src={img1} alt="image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.gallery}>
          <Image className="w-full h-1/2 absolute" src={img1} alt="image" />
          <Image className="w-full h-1/2  " src={img2} alt="image" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
