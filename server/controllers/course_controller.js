import Users from "../model/User.js";
import Courses from "../model/Course.js";

export default function (io) {
    const home = async function (req, res) {
        res.send("Course Router is working");
    };

    const createCourse = async function (req, res) {
        try {
            let course = await Courses.create({
                tutor: req.body.tutor,
                name: req.body.name,
                fees: req.body.fees ? req.body.fees : 0,
                venue: req.body.venue ? req.body.venue : "N/A",
                gaffar: req.body.gaffar ? req.body.gaffar : "N/A",
            });

            await Users.updateOne(
                {
                    email: req.body.tutor
                },
                {
                    $push: { myCourse: course._id },
                }
            )

            return res.status(201).send({
                success: true,
                message: "Course created Successfully",
                course: course
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
        }
    };
    const getCourses = async function (req, res) {
        try {
            let tutor = await Users.findOne({ email: req.body.tutor });
            let courses = [];

            for (let cid of tutor.myCourse) {
                let course = await Courses.findById(cid);
                courses.push({
                    _id: course._id,
                    name: course.name,
                });
            }

            return res.status(201).send({
                success: true,
                message: "Le bhay Thare Courses:",
                courses: courses,
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
        }
    };
    const getInfo = async function (req, res) {
        try {
            let course = Courses.findById(req.body.course_id);

            return res.status(201).send({
                success: true,
                message: "Le bhay Thara Course:",
                course: course
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
        }
    };
    return {
        home,
        createCourse,
        getCourses,
        getInfo
    };
}
