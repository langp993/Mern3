//2nd : create corresponding router wich will contain all the endpoints/routes to perform all the operations with that resource (CRUD)

import express from "express";
import { getAllFakeDocuments } from "../controller/fakeController.js";
import { createFakeDocument } from "../controller/fakeController.js";

const fakeRouter = express.Router();

fakeRouter.get("/all", getAllFakeDocuments);
fakeRouter.post("/createDocument", createFakeDocument);

export default fakeRouter;
