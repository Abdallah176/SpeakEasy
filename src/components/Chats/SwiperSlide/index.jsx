
import { Swiper,SwiperSlide } from "swiper/react";
import PinnedUser from "../PinnedUser";

export default function SwiperSlid() {
    return (
        <div className="col-12 d-flex py-3">
        <Swiper
            spaceBetween={20}
            loop={true}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><PinnedUser /></SwiperSlide>
            <SwiperSlide><PinnedUser /></SwiperSlide>
            <SwiperSlide><PinnedUser /></SwiperSlide>
            <SwiperSlide><PinnedUser /></SwiperSlide>
            <SwiperSlide><PinnedUser /></SwiperSlide>
            <SwiperSlide><PinnedUser /></SwiperSlide>
        </Swiper>
    </div>
    )
}
