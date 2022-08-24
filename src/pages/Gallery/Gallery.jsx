import React from 'react';
import ContentCategory from '../../components/ContentCategory/ContentCategory';
import Navbar from '../../components/NavBar/Navbar';
import './Style.css';


function Home() {
  return (
    <>
      <Navbar />
      <div className='conteiner-galley'>
        <div className='div-gallery'>
          <ContentCategory image={'/assets/image1.jpg'} name={'Movies'} />
          <ContentCategory image={'/assets/image2.png'} name={'Series'} />
          <ContentCategory image={'/assets/image3.jpg'} name={'Games'} />
          <ContentCategory image={'/assets/imagen6.jpg'} name={'Disney +'} />
          <ContentCategory image={'/assets/image3.webp'} name={'Music'} />
          <ContentCategory image={'/assets/image1.jpg'} name={'Concert'} />
          <ContentCategory image={'/assets/image2.png'} name={'Reality'} />
          <ContentCategory image={'/assets/image3.jpg'} name={'Games'} />
          <ContentCategory image={'/assets/imagen6.jpg'} name={'Disney +'} />
          <ContentCategory image={'/assets/image3.webp'} name={'Music'} />
          <ContentCategory image={'/assets/imagen6.jpg'} name={'Disney +'} />
          <ContentCategory image={'/assets/image3.webp'} name={'Music'} />
        </div>
      </div>
    </>

  )
}

export default Home;
