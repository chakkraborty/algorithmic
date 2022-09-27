import React, { useEffect } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import "./Home.css";
import CheckBox from "@mui/icons-material/CheckBox";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/topics");
    console.log(data);
    setNotes(data);
  };

  const userInfo = localStorage.getItem("userInfo");
  const a = JSON.parse(userInfo);

  const userIdForLike = JSON.stringify(a._id);

  const liker = async (id) => {
    const func = await axios.put("/api/topics/like", {
      topicId: id,
      userId: a._id,
    });
    fetchNotes();
  };

  const unliker = async (id) => {
    const func = await axios.put("/api/topics/unlike", {
      topicId: id,
      userId: a._id,
    });
    fetchNotes();
  };

  var comp = userIdForLike;
  console.log(comp);
  console.log(typeof comp);
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="home-center-col">
      <div className="home-top-info">
        <div className="home-top-dummy"></div>
        <div className="home-top-title">Title</div>
        <div className="home-top-tag">Tags</div>
        <div className="home-top-difficulty">Difficulty</div>
      </div>

      {notes.map((topic) => (
        <a
          className="topic-card"
          href="https://www.youtube.com/watch?v=eD3SPuIzigA"
        >
          {topic.likes.find((like) => JSON.stringify(like) === comp) ? (
            <div
              className="topic-card-filled-checkbox"
              onClick={() => unliker(topic._id)}
            >
              <CheckBoxIcon />
            </div>
          ) : (
            <div
              className="topic-card-empty-checkbox"
              onClick={() => liker(topic._id)}
            >
              <CheckBoxOutlineBlankIcon />
            </div>
          )}

          <div className="topic-card-title">{topic.title}</div>
          <div className="topic-card-tag">
            <div className="topic-tag">{topic.tags}</div>
          </div>
          {/* <div className="topic-card-view">View</div> */}
          <div className="topic-card-difficulty">Easy</div>
        </a>
      ))}
    </div>
  );
};

export default Home;
