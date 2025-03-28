import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";


export const indexChatMessages = async (chat_id) => {
    const msgs = await getDocs(collection(db, `chats/${chat_id}/messages`));
    let final = [];
    msgs.forEach((user) => {
        let user_obj = { ...user.data(), documentId: user.id }
        final.push(user_obj);
    });
    return final;
}