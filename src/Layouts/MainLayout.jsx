import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import styles from '../components/SideMenu/index.module.css'

export default function MainLayout() {
    return (
        <div className="col-12 h-100 bg-dark d-flex flex-column flex-lg-row">
            <SideMenu />
            <div className={styles.outlet}>
                <Outlet />
            </div>
            <div className="flex-grow-1 h-100 d-none d-lg-block">Message Contact</div>
        </div>
    )
}
