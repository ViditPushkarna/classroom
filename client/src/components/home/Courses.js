import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/home/course.module.css'
import Course from './courses/Course';

export default function Courses() {

    let { courses } = useSelector((state) => state.home);

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>My Courses</div>
            <div>
                {courses.map((course) => {
                    return <Course course={course} />
                })}
            </div>
        </div >
    )
}
