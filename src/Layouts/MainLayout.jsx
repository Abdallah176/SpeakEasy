import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import styles from '../components/SideMenu/index.module.css'
import ChatMessages from "../components/Chats/ChatMessages/index.jsx";


export default function MainLayout() {
    return (
        <div className="col-12 h-100 d-flex flex-column flex-lg-row">
            <SideMenu />
            <div className={styles.outlet}>
                <Outlet />
            </div>
            <ChatMessages />
        </div>
    )
}
