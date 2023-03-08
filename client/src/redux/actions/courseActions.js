import axios from "axios";
import config from '../../config.json'
import { addCourse, setCourses } from "../homeSlice";
import store from "../store";

export const getCourse = (course_id) => (dispatch) => {
    try {
        let {
            user: { token }
        } = store.getState();
        const req = {
            course_id: course_id
        };

        axios
            .post(config.SERVER + "/course/getInfo", req, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.data.success === false) throw Error("Error");
                console.log("getCourse response:", res);

                console.log(res.data.course);
                dispatch(setCourses(res.data.course));
            });
    } catch (err) {
        console.log("Error in getCourse, ", err);
    }
};

export const createCourse = (name, fees, venue, gaffar) => (dispatch) => {
    try {
        let {
            user: { email, token }
        } = store.getState();
        const req = {
            tutor: email,
            name: name,
            fees: Number(fees),
            venue: venue,
            gaffar: gaffar
        };

        axios
            .post(config.SERVER + "/course/createCourse", req, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.data.success === false) throw Error("Error");
                console.log("createCourse response:", res);

                console.log(res.data.course);
                dispatch(addCourse(res.data.course))
            });
    } catch (err) {
        console.log("Error in createCourse, ", err);
    }
};
