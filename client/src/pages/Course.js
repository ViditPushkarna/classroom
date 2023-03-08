import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { initUser } from '../redux/actions/userActions';
import config from '../config.json'
import axios from 'axios';
import Content from '../components/course/Content'
import Navbar from '../components/course/Navbar';
import styles from '../styles/home/home.module.css'

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            localStorage.getItem("userEmail") === null ||
            localStorage.getItem("token") === null
        ) {
            return navigate("/auth");
        }

        const userEmail = localStorage.getItem("userEmail");
        const token = localStorage.getItem("token");

        const req = {
            user_email: userEmail,
        };

        axios
            .post(config.SERVER + "/user/getInfo", req, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.data.success === false) throw Error("Error");
                console.log("getInfo useEffect response:", res);

                dispatch(initUser(res.data.user, token));
            })
            .catch((err) => {
                console.log(err);
                navigate("/auth");
            });
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
        </div>

    )
}
