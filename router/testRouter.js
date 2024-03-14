import express from "express";
import { createUser, getAllUsers } from "../controller/testController.js";

// import { createUser, testFunction } from "../controller/testController.js";

const testRouter = express.Router();

testRouter.get("/myTest", getAllUsers);
testRouter.post("/register", createUser);

export default testRouter;
