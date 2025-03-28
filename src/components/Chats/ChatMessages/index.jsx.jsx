import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import db from "../../../firebase";
import { currentUserId, useChat } from "../../../store";
import styles from './index.module.css'

export default function ChatMessages() {
    const { chat_id } = useChat();
    const [msgs, setMsgs] = useState([]);
    const mggInput = useRef();


    const handleEnter = (event) => {
        if (event.shiftKey && (event.key === "Enter")) {
            console.log('Go New Line')
        } else if (event.key === "Enter") {
            event.preventDefault();
            sendMessage(event.target.value);
        }
    }
    const sendMessage = async (msg) => {
        await addDoc(collection(db, `chats/${chat_id}/messages`), {
            content: msg,
            sendUser: currentUserId,
            datetime: new Date(),
        });
        mggInput.current.value = "";
    }

    useEffect(() => {
        // get Messages with Live
        onSnapshot(
            query(collection(db, `chats/${chat_id}/messages`), orderBy("datetime"))
            , (msgs) => {
                let final = msgs.docs.map(msg => { return { ...msg.data(), documentId: msg.id } });
                setMsgs(final);
            }
        );
    }, [chat_id]);

    return (
        <div className=" flex-grow-1 h-100 d-none d-lg-flex text-white flex-column">
            <div className='col-12' id={styles.chatHeader}>
                <p>Chat Info</p>
            </div>
            <div className='col-12 flex-grow-1 d-flex flex-column' id={styles.chatMain}>
                {
                    msgs && msgs.map((el) => (
                        <div className={styles.msg} key={el.documentId}>
                            <div className={el.sendUser == currentUserId ? styles.mine : styles.notMine}>
                                {el.content}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='col-12 ' id={styles.chatFooter}>
                <form className="d-flex align-items-center gap-3 p-3" onSubmit={(e) => { e.preventDefault(); sendMessage() }}>
                    <textarea ref={mggInput} onKeyDown={handleEnter} className="form-control"></textarea>
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    )
}
