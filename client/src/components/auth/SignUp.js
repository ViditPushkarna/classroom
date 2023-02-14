import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/userActions';
import styles from "../../styles/auth/signup.module.css"

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        dispatch(signUp(email, password, username, navigate));
    }

    return (
        <div className={styles.container}>
            <div>SignUp</div>
            <input type={"text"} value={username}
                placeholder={"Full Name"}
                onChange={(e) => setUsername(e.target.value)} />
            <input type={"email"} value={email}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)} />
            <input type={"password"} value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)} />
            <div className={styles.submit} onClick={handleSubmit} >Submit</div>
        </div>
    )
}
