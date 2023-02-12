import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import routes from "./routers/index.js";

// fire up the express app
const app = express();

const PORT = 8081;

const server = http.Server(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
// iofunc(io);

// connect to database (this step is for initializing db)
import db from "./config/mongoose.js";
// import passport from "passport";
// console.log(db);

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

// use express router
app.use("/", routes(io));

server.listen(process.env.PORT || PORT, function (err) {
    if (err) {
        console.log("oh no no no no no");
        return;
    }
    console.log("hey there i am using classroom on port : ", PORT);
});