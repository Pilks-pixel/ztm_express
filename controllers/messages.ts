import * as path from "node:path";

function getMessages(req, res) {
  console.log(import.meta.dirname);
  res
    .status(200)
    .sendFile(path.join(import.meta.dirname, "../public/skimountain.jpg"));
}

export { getMessages };
