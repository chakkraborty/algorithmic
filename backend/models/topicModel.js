const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const topicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: String,
        ref: "user",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic;
