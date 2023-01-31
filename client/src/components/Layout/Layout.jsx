import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { funcSetNews } from '../../redux/actions/newsAction';
import NavBar from '../NavBar';
import '../../App.css';
import './Layout.css';

export default function Layout({
  author, avatar, id, children,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(funcSetNews());
  }, []);
  const news = useSelector((store) => store.news);
  console.log(news, 'qwerty news');

  return (
    <div className="cnLayoutRoot">
      <NavBar author={author} avatar={avatar} id={id} />
      <div className="cnLayoutBody">{children}</div>
    </div>
  );
}
