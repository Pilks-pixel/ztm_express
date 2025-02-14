import express from "express";

import friendRoutes from "./routes/friends.ts";
import messageRoutes from "./routes/messages.ts";

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
app.use("/messages", messageRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
