import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './UserBadge.css';

export default function UserBadge({ author, avatar, id }) {
  const navigate = useNavigate();

  const onUserBadgeClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="cnUserBadgeRoot" onClick={onUserBadgeClick}>
      {avatar ? <img src={avatar} alt="avatar" className="cnUserBadgeAvatar" /> : <div className="cnUserBadgePlaceholder" />}
      <span className="cnUserBedgeName">{author}</span>
    </div>
  );
}
