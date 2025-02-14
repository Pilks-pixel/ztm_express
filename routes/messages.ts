import express from "express";
const router = express.Router();

import { getMessages } from "../controllers/messages.ts";

// import path from "node:path";

router.get("/", getMessages);

export default router;
