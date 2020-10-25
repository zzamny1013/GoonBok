import express from "express";

//var router = require('./router/main')(app);
import mainRouter from "./routes/main.js";
import loginRouter from "./routes/login.js";
import apiRouter from "./routes/apiRouter.js";
import session from "express-session";
import logger from "morgan";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';

const app = express();
const port = 3000;

//es6 type:module은 __dirname이 없음.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile); 

app.use(
    session({
        key: "sid",
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24000 * 60 * 60, // 쿠키 유효기간 24시간
        },
    })
);

app.use(express.static("public"));
app.use(logger("dev"));

app.use("/", mainRouter);
app.use("/login", loginRouter);
app.use("/api", apiRouter);

const server = app.listen(port, function () {
    console.log("Express server has started on port 3000(http://localhost:3000)");
});
