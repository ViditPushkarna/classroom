import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCourse } from '../../redux/actions/homeActions';
import styles from '../../styles/home/addCourse.module.css'

export default function AddCourse() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [fees, setFees] = useState("");
    const [venue, setVenue] = useState("");
    const [gaffar, setGaffar] = useState("");

    const handleSubmit = () => {
        dispatch(createCourse(name, fees, venue, gaffar));
        setName("");
        setFees("");
        setVenue("");
        setGaffar("");
    }

    return (
        <div className={styles.container}>
            <div>
                <input
                    className={`${styles.textcomparea}`}
                    value={name}
                    spellCheck="false"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Course Name"
                />
            </div>
            <div>
                <input
                    className={`${styles.textcomparea}`}
                    value={fees}
                    spellCheck="false"
                    onChange={(e) => setFees(e.target.value)}
                    placeholder="Fees"
                    type={Number}
                />
            </div>
            <div>
                <input
                    className={`${styles.textcomparea}`}
                    value={venue}
                    spellCheck="false"
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="Venue"
                />
            </div>
            <div>
                <input
                    className={`${styles.textcomparea}`}
                    value={gaffar}
                    spellCheck="false"
                    onChange={(e) => setGaffar(e.target.value)}
                    placeholder="Gaffar id"
                />
            </div>
            <div className={styles.submit} onClick={handleSubmit}>
                <p>
                    Create Course
                </p>
            </div>
        </div>
    )
}
