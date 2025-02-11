import express from "express";
const router = express.Router();

import {
  getFriends,
  getFriendById,
  addFriend,
} from "../controllers/friends.ts";

router.use(function logIP(req, res, next) {
  console.log(`request from ${req.ip}, ${req.method} ${req.baseUrl}`);
  next();
});

router.get("/", getFriends);

router.get("/:id", getFriendById);

router.post("/", addFriend);

export default router;
