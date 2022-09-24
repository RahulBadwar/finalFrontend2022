import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BookMyBus</h2>

        <p>BookMyBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. BookMyBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</p>
        <br />

       

        <strong>Ⓒ 2022 BookMyBus All rights reserved</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
