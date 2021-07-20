import * as express from "express";
import { resolve } from "path";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { Database } from "./database";

const port = process.env.PORT || 8000;



const static_path = resolve(__dirname, "../../static");
const content_path = resolve(__dirname, "../../src/index.html");

const server = express();

server.use((req, res, next) => {
    if (!req.secure && req.get("x-forwarded-proto") !== "https") {
        return res.redirect(`https://${req.hostname}${req.url}`);
    }
    next();
});

server.use(express.static(static_path));


server.use(bodyParser.json({ limit: "10mb" }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use('/images', express.static(__dirname + '/images'));

// server.get("/", (_req, res) => res.sendFile(content_path));
server.get("/", (_req, res) => res.redirect("/home"));
server.get("/home", (_req, res) => res.sendFile(content_path));


server.listen(port, () => console.log(`Server listening on port ${port}...`));
