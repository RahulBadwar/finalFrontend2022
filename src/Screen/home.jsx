
import Menu from './Menu';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/img1.jpeg"
import Header from '../Componets/Header';
import UserNavigation from '../Componets/UserNavigation';


function Home() {
  return (
      <>
     
      <Header/>
        <div
        style={{
          background: ` url(${img1})`,
          backgroundSize: "cover",
         
          height: "80vh",
          backgroundRepeat: "no-repeat",
          borderRadius:"1cm"
        }}
      >

       

        
    
      </div>

    <Menu />
    </>
  );
}

export default Home;