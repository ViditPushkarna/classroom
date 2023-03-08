import React from 'react'
import styles from '../../../styles/home/course/course.module.css'

export default function Course({ course }) {
    return (
        <div className={styles.container} >
            <p>{course.name}</p>
        </div>
    )
}