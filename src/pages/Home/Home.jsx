import React from 'react';
import { Link } from "react-router-dom";
import ContentCategory from '../../components/ContentCategory/ContentCategory';
import Navbar from '../../components/NavBar/Navbar';
import './Style.css';


function Home() {
  return (
    <>
      <Navbar />
      <div className='conteiner-home'>
        <div className='div-home'>
          <Link to='/details'> <ContentCategory image={'/assets/image1.jpg'} name={'Movies'} />  </Link>
          <Link to='/details' >  <ContentCategory image={'/assets/image2.png'} name={'Series'} /> </Link>
          <Link to='/details' >  <ContentCategory image={'/assets/image3.jpg'} name={'Games'} /> </Link>
          <Link to='/details' >  <ContentCategory image={'/assets/imagen6.jpg'} name={'Disney +'} /> </Link>
          <Link to='/details'>  <ContentCategory image={'/assets/image3.webp'} name={'Music'} /> </Link>
        </div>
      </div>
    </>

  )
}

export default Home;
