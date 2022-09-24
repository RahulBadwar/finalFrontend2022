import React from "react";
import MenuCard from "./Menucard";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          
          burgerSrc={"https://3.bp.blogspot.com/-MXFfKNq-Wx8/XE3W_H_WDvI/AAAAAAAABV8/YKl4ZOB9Tj0XCk-NBx5OkswKbeORg9mSwCEwYBhgL/s1600/ets2_20190126_225503_00.png"}
          Category={"AC"}
          title="Yuga Travels"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
       
          burgerSrc={"https://live.staticflickr.com/7332/27195481670_5921ea965a_b.jpg"}
          Category={"NON-AC"}
          title="VRL travels"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
         
          burgerSrc={"https://hillsimages.s3-accelerate.amazonaws.com/2018/03/IMG_9409.jpg"}
          Category={"Sleeper"}
          title="Mercedes Bens"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    <br/>
      <div>
        <MenuCard
        
          burgerSrc={"https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/pjQAAOSwYvde7Jbb/$_57.JPG?set_id=2"}
          Category={"Seater"}
           title="Airal Travels"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
        
          burgerSrc={"https://i.pinimg.com/736x/0d/80/cc/0d80ccb38807479810360610ebc2e22f--rv-motor.jpg"}
          Category={"Traveller"}
         title="RV travels"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
         
          burgerSrc={"https://www.marathoncoach.com/wp-content/uploads/2020/05/0836-4.jpg"}
          Category={"Vanity"}
          title="Max Travels"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
