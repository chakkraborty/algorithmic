const express = require("express");
const { getTopics } = require("../controllers/topicControllers");
const { createTopics } = require("../controllers/topicControllers");
const Topic = require("../models/topicModel");

const router = express.Router();
router.route("/").get(getTopics);
router.route("/create").post(createTopics);
router.put("/like", (req, res) => {
  Topic.findByIdAndUpdate(
    req.body.topicId,
    {
      $push: { likes: req.body.userId },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/unlike", (req, res) => {
  Topic.findByIdAndUpdate(
    req.body.topicId,
    {
      $pull: { likes: req.body.userId },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
