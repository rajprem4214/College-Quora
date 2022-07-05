import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./Header.css";
import "react-responsive-modal/styles.css";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
const Header = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">College Quora</div>
        <div className="header__icons">
          <div className="header__icon">
            <HomeIcon />
          </div>
          <div className="header__icon">
            <FeedIcon />
          </div>
          <div className="header__icon">
            <BorderColorIcon />
          </div>
          <div className="header__icon">
            <GroupsIcon />
          </div>
          <div className="header__icon">
            <NotificationsActiveIcon />
          </div>
          <div className="github header__icon">
            <GitHubIcon />
          </div>
        </div>
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Questions" />
        </div>
        <div className="header__rem">
          <Avatar />
        </div>
        <div className="add__button">
          <button onClick={() => setIsModalOpen(true)}>Add Question</button>
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
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar className="avatar" />
              <div className="modal__scope">
                <PeopleAltIcon />
                <p>Public</p>
                <ArrowDropDown />
              </div>
            </div>

            <div className="modal__Field">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder="Start Your Question with 'What', 'How', etc... "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {" "}
                <input
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Optional: include a link"
                />{" "}
                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="images"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
