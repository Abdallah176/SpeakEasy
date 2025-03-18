import styles from './index.module.css'
import logo from '../../assets/logo.svg'
import userImg from '../../assets/avatar-1.jpg'
import { Link, useLocation } from 'react-router-dom'
import { RiMoonLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { usePaths } from '../../store';


export default function SideMenu() {
    const {paths} = usePaths();

    const [activePath,setActivePath] = useState();
    const location = useLocation();
    useEffect(() => {
        setActivePath(location.pathname);
    },[location]);
    return (
        <div className="d-flex flex-column bg-white shadow border align-items-center py-3 px-2 gap-2" id={styles.SideMenu}>
            <img src={logo} className="d-none d-lg-block pb-5"/>
            {
                paths.map((el,index) => {
                    return <Link key={index} to={el.path} className={el.path == activePath ? styles.activeLink : null}>{el.icon}</Link>
                })
            }
            
            <Link className="d-none d-lg-block" id={styles.moon}><RiMoonLine /></Link>

            <div className="dropdown" id={styles.userActions}>
                <img src={userImg} data-bs-toggle="dropdown" aria-expanded="false"/>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                </ul>
            </div>
        </div>
    )
}
