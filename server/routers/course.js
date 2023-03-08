import express from "express";
import passport from "passport";
import "../config/passport.js";
import home from '../controllers/course_controller.js'

export default function (io) {
    const router = express.Router();
    console.log("User Router loaded");

    router.get("/", home(io).home);
    router.post(
        "/createCourse",
        passport.authenticate("jwt", { session: false }),
        home(io).createCourse);
    router.post(
        "/getCourses",
        passport.authenticate("jwt", { session: false }),
        home(io).getCourses);
    router.post(
        "/getInfo",
        passport.authenticate("jwt", { session: false }),
        home(io).getInfo);

    return router;
}

// for any further routes, access from here
// router.use('/routerName', require('./route'));
