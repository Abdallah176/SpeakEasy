import { indexChatMessages } from "../apis/index-chat-messages";
import { indexUsers } from "../apis/index-users"
import { showUsers } from "../apis/show-users";


export const usersRepo = {
    get_all_users : async () => {
        return await indexUsers();
    },
    get_user_data : async (user_id) => {
        return showUsers(user_id);
    },
    get_chat_messages: async (chat_id) => {
        return indexChatMessages(chat_id);
    },
}