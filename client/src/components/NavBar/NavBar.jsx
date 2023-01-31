import React from 'react';
import '../../App.css';
import UserBadge from '../UserBadge/UserBadge';
import './NavBar.css';

export default function NavBar({
  author, avatar, id,
}) {
  return (
    <div className="onNavBarRoot">
      <div className="cnNavBarWrapper">
        <span className="mainTextNavBar">FrontendNews</span>
        <UserBadge author={author} avatar={avatar} id={id} />
      </div>
    </div>
  );
}
