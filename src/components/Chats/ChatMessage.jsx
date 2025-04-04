import styles from './index.module.css'
import imgUrl from '../../assets/avatar-1.jpg'
import { useChat } from '../../store';


export default function ChatMessage(props) {
    const { setOpendChat } = useChat();
    const getChatMessages = () => {
        let id = props.chat_id;
        setOpendChat(id);
    }
    return (
        <div onClick={getChatMessages} className={styles.chatMessage + ` ${props.isActive ? styles.active : null}`}>
            <div className="d-flex position-relative">
                <img src={imgUrl}/>
                <b style={{ background: props.statusColor ? props.statusColor : 'green'}}></b>
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <h5 className="m-0">{props.username}</h5>
                <p className="m-0">The last message ...</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
                <h6 className="m-0">6:00 PM</h6>
                <span>02</span>
            </div>
        </div>
    )
}
