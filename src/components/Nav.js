import React from "react";
// styles
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
     return(
          <StyledNav>
               <Logo>
                    <img src={logo} alt="logo"/>
                    <h1>Ignite</h1>
               </Logo>
               <div className="search">
                    <input type="search" name="search" id="search" />
                    <button>search</button>
               </div>
          </StyledNav>
     );
};

const StyledNav = styled(motion.nav)`
     padding: 3rem 5rem;
     text-align: center;
     input{
          width: 30%;
          font-size: 1.5rem;
          padding: 0.5rem;
          border: none;
          margin-top: 1rem;
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
     }
     button{
          font-size: 1.5rem;
          border: none;
          padding: 0.5rem 2rem;
          cursor: pointer;
          background: #ff7676;
          color: white;
          transition: all 0.3s ease;
          &:hover{
               color: #ff7676;
               background: white;
          }
     }
`;

const Logo = styled(motion.div)`
     display: flex;
     justify-content: center;
     padding: 1rem;
     cursor: pointer;
     img{
          width: 2rem;
          height: 2rem;
     }
`;

export default Nav;