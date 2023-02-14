import axios from "axios";
import { setEmail, setPassword, setToken, setUser, setUsername } from "../userSlice";
import config from '../../config.json'

export const check = (lpassword, lemail, navigate) => (dispatch) => {
    try {
        dispatch(setEmail(lemail));
        dispatch(setPassword(lpassword));
        navigate("/home");
    } catch (err) {
        console.log(err);
    }
}

export const login = (lpassword, lemail, navigate) => (dispatch) => {
    try {
        const req = {
            user_email: lemail,
            user_password: lpassword,
        };

        axios
            .post(config.SERVER + "/user/login", req)
            .then((res) => {
                if (res.data.success === false) throw Error("Error");
                console.log("Login res: ", res);

                const user = res.data.user;
                localStorage.setItem("userEmail", user.email);
                dispatch(setUser(user));
                dispatch(setEmail(lemail));

                const token = res.data.token;
                localStorage.setItem("token", token);
                dispatch(setToken(token));

                navigate("/home");
            });
    } catch (err) {
        console.log("Error in Login, ", err);
    }
};

export const signUp = (lemail, lpassword, lusername, navigate) => (dispatch) => {
    try {
        const req = {
            user_email: lemail,
            user_password: lpassword,
            user_name: lusername
        }

        axios
            .post(config.SERVER + "/user/createUser", req)
            .then((res) => {
                if (res.data.success === false) throw Error("Error");

                const user = res.data.user;
                localStorage.setItem("userEmail", user.email);
                dispatch(setEmail(user.email));
                dispatch(setUser(user));

                const token = res.data.token;
                localStorage.setItem("token", token);
                dispatch(setToken(token));

                navigate("/home");
            })
    } catch (err) {
        console.log("Error in Signup", err);
    }

}

export const initUser = (user, token) => (dispatch) => {
    try {
        dispatch(setUser(user));
        dispatch(setToken(token));
        dispatch(setEmail(user.email));
        dispatch(setUsername(user.name));
    } catch (err) {
        console.log("Error in initUser", err);
    }
}