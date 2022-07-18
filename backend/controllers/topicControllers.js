const Topic = require("../models/topicModel");
const asyncHandler = require("express-async-handler");

const getTopics = asyncHandler(async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
});

const createTopics = asyncHandler(async (req, res) => {
  const { title, link, tags } = req.body;
  if (!title || !link || !tags) {
    res.status(400);
    throw new Error("please fill all the fields");
  } else {
    const topic = new Topic({ title, link, tags });
    const createdTopic = await topic.save();
    res.status(201).json(createdTopic);
  }
});

module.exports = { getTopics, createTopics };
