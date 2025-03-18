import { CiSearch } from "react-icons/ci";
import styles from './index.module.css'
import ChatMessage from "./ChatMessage";
import { Swiper,SwiperSlide } from "swiper/react";
import PinnedUser from "./PinnedUser";
import { useState } from "react";

export default function Chats() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='col-12 p-3 h-100 d-flex flex-column'>
            <h5>Chats</h5>
            <div className="position-relative">
                <CiSearch id={styles.searchIcon} className="position-absolute"/>
                <input className={styles.searchInput} placeholder='Search message or users' />
            </div>
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
            <p>Recent</p>
            <div className={`scrollable-element ${isHovered ? 'hovered' : ''} col-12 h-25 overflow-auto flex-grow-1`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} id={styles.chatContainer}>
                <ChatMessage isActive={true} />
                <ChatMessage statusColor = {'yellow'} />
                <ChatMessage statusColor = {'red'} />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
        </div>
    )
}
