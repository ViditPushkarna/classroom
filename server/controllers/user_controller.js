import Users from "../model/User.js";
import jwt from "jsonwebtoken";

export default function (io) {
    const home = async function (req, res) {
        res.send("User Router is working");
    };

    const getInfo = async function (req, res) {
        try {
            let user = await Users.findOne({
                email: req.body.user_email,
            });

            return res.status(201).send({
                success: true,
                message: "Le bhay thara User",
                user: user,
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
            // res.send("Error", err);
        }
    };

    const createUser = async function (req, res) {
        try {
            let user = await Users.create({
                name: req.body.user_name,
                email: req.body.user_email,
                password: req.body.user_password,
            });

            const payload = {
                user_email: user.email,
                id: user._id,
            };

            const token = jwt.sign(payload, "Random Baniyaan", { expiresIn: "1d" });

            return res.status(201).send({
                success: true,
                message: "Sign up Page Successfully",
                token: "Bearer " + token,
                user: user,
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
            // res.send("Error", err);
        }
    };

    const login = async function (req, res) {
        try {
            let user = await Users.findOne({ email: req.body.user_email });
            // no user found
            if (!user) {
                return res.status(401).send({
                    success: false,
                    message: "Could not find the user",
                });
            }
            // Incorrect Password
            if (req.body.user_password != user.password) {
                return res.status(401).send({
                    success: false,
                    message: "Password Invalid",
                });
            }

            const payload = {
                user_email: user.email,
                id: user._id,
            };

            const token = jwt.sign(payload, "Random Baniyaan", { expiresIn: "1d" });

            return res.status(201).send({
                success: true,
                message: "Logged In Successfully",
                token: "Bearer " + token,
                user: user,
            });
        } catch (err) {
            return res.status(401).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
        }
    };


    const updatename = async function (req, res) {
        try {
            await Users.findOneAndUpdate(
                {
                    email: req.body.user_email,
                },
                {
                    name: req.body.name,
                }
            );

            return res.status(201).send({
                success: true,
                message: "User name updated",
            });
        } catch (err) {
            return res.status(401).send({
                success: false,
                message: `Bhai error aara : ${err}`,
            });
        }
    };
    return {
        home,
        createUser,
        login,
        updatename,
        getInfo,
    };
}
