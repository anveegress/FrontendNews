import React, { useState } from 'react';
import UserBadge from '../UserBadge';
import Comment from '../Comment';
import '../../App.css';
import './CardForNews.css';

export default function CardForNews({
  author, avatar, id, title, raiting, url, comments,
}) {
  const [isCommentsShown, setIsCommentsShown] = useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShown) {
      const commentsForRender = [...comments];
      commentsForRender.splice(comments.length - 2, 2);
      return (
        <>
          <span className="cnCardNewsCommentsTitle" onClick={() => setIsCommentsShown(true)}>{`Показать еще ${comments.length - commentsForRender.length} комментар(ий/иев)`}</span>
          {commentsForRender.map((comment) => <Comment text={comment.text} nickname={comment.nickname} />)}
        </>
      );
    }
    return comments.map((comment) => <Comment text={comment.text} nickname={comment.nickname} />);
  };
  return (
    <div className="cnCardNewsRoot">
      <div className="cnCardNewsHeader">
        <UserBadge author={author} avatar={avatar} id={id} />
      </div>
      <div>
        <img src={avatar} alt="avatar" className="cnCardImage" />
      </div>
      <div className="cnCardNewsTitle">
        {title}
      </div>
      <div className="cnCardNewsRaiting">
        {raiting}
      </div>
      <div>
        {url}
      </div>
      <div>{`Прокомментировали ${comments} человек`}</div>
      <div className="cnCardComments">
        {renderComments()}
      </div>
      <div>
        <textarea className="cnCardNewsTextarea" />
      </div>
    </div>
  );
}
