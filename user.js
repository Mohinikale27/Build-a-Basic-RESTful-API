import express from "express";

import{ getUsers, createUser, getUsers, deleteUser } from "../Controller/user";

 const router = express.Router();

 router.get("/users", getUsers);
 router.post("/user", createUser);
 router.get("/user/:id", getUsers);
 router.delete("/user/:id", deleteUser);

 export default router;
