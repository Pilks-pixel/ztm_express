import express from "express";
const router = express.Router();

import { getMessages } from "../controllers/messages.ts";

router.use("/site", express.static("public"));

router.get("/", getMessages);

export default router;
