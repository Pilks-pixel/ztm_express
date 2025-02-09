// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

type Friend = {
  id: number;
  name: string;
};

// Type definition
const friends: Friend[] = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

// Middleware
const logTime = function setTime(req, res, next) {
  req.time = Number(new Date());
  console.log(`Request received at ${req.time}`);
  next();
};

function getTotalTime(req, res, next) {
  res.time = Number(new Date()) - req.time;
  console.log(`Total time taken: ${res.time}ms`);
  next();
}

app.use(express.json());
app.use(logTime);
app.use(getTotalTime);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/friends", (req, res) => {
  if (friends.length === 0) {
    res.status(404).json("No friends found");
  } else {
    res.json(friends);
  }
});

app.get("/friends/:id", (req, res) => {
  const friend = friends[req.params.id];
  if (!friend) {
    res.status(404).json("Friend not found");
  } else {
    res.json(friend.name);
  }
});

app.post("/friends", (req, res) => {
  friends.push({
    id: friends.length,
    name: req.body.name,
  });
  res.json(friends);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
