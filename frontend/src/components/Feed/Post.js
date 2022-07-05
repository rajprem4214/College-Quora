import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-modal/styles.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>user name</h4>
        <small>time</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>This is test question</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__question">
              <h1>This is test question</h1>
              <p>asked by {" "}  <span>Username</span>{" "}on{" "} <span>TIMe</span></p>
            </div>
              <div className="modal__answer">

              <ReactQuill theme="snow" placeholder="Enter Your Answer" />
              </div>
            
            <div className="modal__button">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <div className="vote">
            &nbsp; <ArrowUpwardIcon />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ArrowDownwardIcon /> &nbsp;
          </div>
        </div>
        <div className="post__footerMid">
          <RepeatIcon />
          &nbsp;&nbsp;&nbsp;
          <ChatIcon />
        </div>
        <div className="post__footerLeft">
          <ShareIcon />
          <MoreHorizIcon />
        </div>
      </div>

      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post__answer-container"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          >
            <Avatar />
            <div
              style={{
                margin: "0px 10px",
              }}
              className="post-info"
            >
              <p>Username</p>
              <span>Tine</span>
            </div>
          </div>
          <div className="post-answer">This is test answer</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
