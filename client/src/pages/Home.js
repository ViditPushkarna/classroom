import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { initUser } from '../redux/actions/userActions';
import config from '../config.json'
import axios from 'axios';

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.user);

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
                navigate("/home");
            });
    }, [])

    return (
        <div>
            <p>Welcome Home, {username}</p>
        </div>
    )
}
