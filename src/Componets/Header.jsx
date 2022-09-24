import React from "react";
import { IoLogInOutline} from "react-icons/io5";
import { Link } from "react-router-dom";
import {  FiLogIn ,FaSignInAlt} from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <h3>BookMyBus</h3>
      </motion.div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact1">Contact</Link>
        <Link to="/contact">About</Link>
        <Link to="/log-in">
          LogIn
          <IoLogInOutline />
        </Link>

        <Link to="/sign-up">
          SignUp
           <FaUser /> 
        </Link>
      </div>
    </nav>
  );
};

export default Header;
