import Mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const messages = await PostMessage.find();

    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;

  const newPosts = new PostMessage(post);
  try {
    await newPosts.save();

    res.status(200).json(newPosts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePosts = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with that id found.");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export const deletePosts = async (req, res) => {
  const { id: _id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with that id found.");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "Post successfully deleted" });
};

export const likePosts = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId) return res.json({ message: "unauthenticated" });

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with that id found.");

  const post = await PostMessage.findById(_id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    {
      post,
    },
    { new: true }
  );

  res.json(updatedPost);
};
