import React from 'react';
import '../../App.css';
import './Comment.css';

export default function Comment({ nickname, text }) {
  return (
    <div className="cnCommentRoot">
      <span className="cnCommentName">
        {nickname}
        :
      </span>
      <span>{text}</span>
    </div>
  );
}
