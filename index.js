import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routs/user";

const app = exppress();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res)=> res.send("hello from express"));
app.all("*", (req, res) => res.send("not found"))
app.listen(port, ()=>
console.log(`server is listening on port: http://localhost:$post')`)
);
