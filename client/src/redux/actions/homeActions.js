import axios from "axios";
import config from '../../config.json'
import { addCourse, setCourses } from "../homeSlice";
import store from "../store";

export const getCourses = () => (dispatch) => {
    try {
        let {
            user: { email, token }
        } = store.getState();
        const req = {
            tutor: email
        };

        axios
            .post(config.SERVER + "/course/getCourses", req, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.data.success === false) throw Error("Error");
                console.log("getCourses response:", res);

                let courses = [];
                for (let course of res.data.courses) {
                    courses.push({
                        name: course.name,
                        id: course._id
                    });
                }

                console.log(courses);
                dispatch(setCourses(courses));
            });
    } catch (err) {
        console.log("Error in getCourses, ", err);
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
