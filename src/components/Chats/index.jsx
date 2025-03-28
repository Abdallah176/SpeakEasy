import { CiSearch } from "react-icons/ci";
import styles from './index.module.css'
import ChatMessage from "./ChatMessage";
import SwiperSlid from "./SwiperSlide";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import db from "../../firebase";
import { usersRepo } from "../../data/repos/usersRepo";
import { currentUserId } from "../../store";

export default function Chats() {
    const [chats, setChats] = useState([]);

    const getChatsLive = (user_id) => {
        onSnapshot(
            query(collection(db, "chats"), where("users", "array-contains", user_id))
            , async (chats) => {
                let final = [];
                let promises = chats.docs.map(async (chat) => {
                    let chat_obj = { ...chat.data(), documentId: chat.id };
                    let reciver_id = chat_obj.users.find(el => el !== user_id);
                    let userData = await usersRepo.get_user_data(reciver_id);
                    return { ...chat_obj, name: userData.name };
                });
                final = await Promise.all(promises);
                setChats(final);
            });
    }
    // useEffect(() => { usersRepo.get_all_users().then(setChats)}, []);
    useEffect(() => {
        getChatsLive(currentUserId);
    }, []);

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
                {
                    chats.map((el) => (
                        <ChatMessage key={el.documentId} chat_id={el.documentId} statusColor={'red'} username={el.name} />
                    ))
                }
            </div>
        </div>
    )
}
