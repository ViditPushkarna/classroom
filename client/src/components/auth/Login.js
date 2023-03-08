import { bindActionCreators } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/auth/login.module.css"
import { check, login } from '../../redux/actions/userActions';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        dispatch(login(password, email, navigate));
    }

    return (
        <div className={styles.container}>
            <div>Login</div>
            <input type={"email"} value={email}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)} />
            <input type={"password"} value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleEnterPress} />
            <div className={styles.submit} onClick={handleSubmit} >Submit</div>
        </div>
    )
}
