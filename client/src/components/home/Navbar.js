import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/home/navbar.module.css'

export default function Navbar() {

    const navigate = useNavigate();

    const { username } = useSelector((state) => state.user);

    const handleLogout = (e) => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("token");
        navigate("/auth");
    }

    return (
        <div className={styles.container}>
            <div className={styles.branding}>
                <p>Classroom</p>
            </div>
            <div className={styles.username}>
                <p>{username}</p>
            </div>
            <div className={styles.logout} onClick={handleLogout}>
                <p>LogOut</p>
            </div>
        </div>
    )
}
