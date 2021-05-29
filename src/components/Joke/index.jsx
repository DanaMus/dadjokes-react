import React, { useState, useEffect } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesUp, setLikesUp] = useState(0);
  const [likesDown, setLikesDown] = useState(0);

  useEffect(() => {
    setLikesUp(likes);
    setLikesDown(dislikes);
  }, []);

  const handleLikesUp = () => {
    setLikesUp(likesUp + 1);
  };

  const handleLikesDown = () => {
    setLikesDown(likesDown + 1);
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleLikesUp}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesUp}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleLikesDown}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likesDown}
        </span>
      </div>
    </div>
  );
};

export default Joke;
