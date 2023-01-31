import React from 'react';
import Layout from '../../components/Layout';
import CardForNews from '../../components/CardForNews/CardForNews';
import './MainPage.css';
import '../../App.css';

export default function MainPage() {
  return (
    <Layout>
      <>
        <div>mainpage</div>
        <CardForNews author="mister" avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1133.jpg" id="1" title="nbsfkhdskfs" raiting="8" url="https://www.ixbt.com/news/2022/02/09/microsoft-windows-7-windows-8-1-windows-10-windows-11.html" comments={[{ text: 'sadjsfh', nickname: 'pop' }, { text: 'sadjsfh', nickname: 'pop' }, { text: 'sadjsfh', nickname: 'pop' }]} />
      </>
    </Layout>
  );
}
