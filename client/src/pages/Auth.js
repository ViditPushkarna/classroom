import React from 'react'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'
import styles from '../styles/auth/auth.module.css'

export default function Auth() {
    return (
        <div className={styles.container}>
            <Login />
            <SignUp />
        </div>
    )
}
