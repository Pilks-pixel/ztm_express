import friends from "../model/friends.ts";

function getFriends(req, res) {
  if (friends.length === 0) {
    res.status(404).json("No friends found");
  } else {
    res.status(200).json(friends);
  }
}

function getFriendById(req, res) {
  const friend = friends[req.params.id];
  if (!friend) {
    res.status(404).json("Friend not found");
  } else {
    res.status(200).json(friend.name);
  }
}

function addFriend(req, res) {
  if (!req.body.name) {
    res.status(400).json("Name is required");
  } else {
    friends.push({
      id: friends.length,
      name: req.body.name,
    });
    res.status(201).json(friends);
  }
}

export { getFriends, getFriendById, addFriend };
