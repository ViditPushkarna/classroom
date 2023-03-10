import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { initUser } from '../redux/actions/userActions';
import config from '../config.json'
import axios from 'axios';
import Courses from '../components/home/Courses';
import AddCourse from '../components/home/AddCourse';
import Navbar from '../components/home/Navbar';
import styles from '../styles/home/home.module.css'
import { getCourses } from '../redux/actions/homeActions';

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
                dispatch(getCourses());
            })
            .catch((err) => {
                console.log(err);
                navigate("/auth");
            });
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.leftHalf}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.addCourse} >
                    <AddCourse />
                </div>
            </div>
            <div className={styles.rightHalf}>
                <Courses />
            </div>
        </div>

    )
}
