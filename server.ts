import express from "express";

// import { getFriends, getFriendById, addFriend } from "./controllers/friends.ts";
import friendRoutes from "./routes/friends.ts";

const app = express();
const port = 3000;

// Middleware
function logTime(req, res, next) {
  req.time = Number(new Date());
  console.log(`Request received at ${req.time}`);
  next();
  res.time = Number(new Date()) - req.time;
  console.log(`Total time taken: ${res.time}ms`);
}

app.use(express.json());
app.use(logTime);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/friends", friendRoutes);

// app.get("/friends", getFriends);

// app.get("/friends/:id", getFriendById);

// app.post("/friends", addFriend);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
