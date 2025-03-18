import { CiSearch } from "react-icons/ci";
import styles from './index.module.css'
import ChatMessage from "./ChatMessage";
import SwiperSlid from "./SwiperSlide";

export default function Chats() {
    return (
        <div className='col-12 p-3 h-100 d-flex flex-column'>
            <h5>Chats</h5>
            <div className="position-relative">
                <CiSearch id={styles.searchIcon} className="position-absolute"/>
                <input className={styles.searchInput} placeholder='Search message or users' />
            </div>
            <SwiperSlid />
            <p>Recent</p>
            <div className="col-12 h-25 overflow-auto flex-grow-1" id={styles.chatContainer}>
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
