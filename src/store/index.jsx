import { RiContactsLine, RiGroupLine, RiMessage3Line, RiSettings2Line, RiUser2Line } from "react-icons/ri";
import { create } from "zustand";
import Chats from "../components/Chats";


export const currentUserId = "1";

export const usePaths = create(() => ({
    paths : [
        { path: "/profile"  ,icon: <RiUser2Line />, element: <h1>Profile</h1> },
        { path: "/chats"    ,icon: <RiMessage3Line />, element: <Chats /> },
        { path: "/groups"   ,icon: <RiGroupLine />, element: <h1>Groups</h1> },
        { path: "/contacts" ,icon: <RiContactsLine />, element: <h1>Contacts</h1> },
        { path: "/settings" ,icon: <RiSettings2Line />, element: <h1>Settings</h1> },
    ]
}));

export const useChats = create( (set) => ({
    users: [],
    setUsers: (usersLive) => (set(() => ({users: usersLive })))
}))

export const useChat = create((set) => ({
    chat_id: 0,
    setOpendChat: (chat_id) => (set(() => ({ chat_id })))
}));