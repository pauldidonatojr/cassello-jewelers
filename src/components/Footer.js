import React,{useState} from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import { motion } from 'framer-motion';

const Footer = () => {
  const [NewsLetter, setNewsLetter] = useState(false);
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;
  const handleScroll = () => {
    const scrollY = window.scrollY;

  

    if (scrollY + windowHeight >= fullHeight) {
      setNewsLetter(true);
    }
    else {
      setNewsLetter(false);
    }
   
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <Container>
      <div className="FooterInner">
        <div className="FooterUpper">
          <Grid container gap={2} className="GridHolder">
            <Grid sm={2}>
              <div className="FooterSub">
                <p className="FooterTitle">Address</p>
                <p className="FooterSubtitle">
                  Wall Street, 558742, New York, USA
                </p>
              </div>
            </Grid>

            <Grid sm={2}>
              <div className="FooterSub">
                <p className="FooterTitle">Contact</p>
                <p className="FooterSubtitle">+98(420) 22456</p>
              </div>
            </Grid>
            <Grid sm={2}>
              <div className="FooterSub">
                <p className="FooterTitle">Socials</p>
                <div className="SocialIconHolder">
                  <InstagramIcon className="FooterIcon" />
                  <YouTubeIcon className="FooterIcon" />
                  <FacebookIcon className="FooterIcon" />
                </div>
              </div>
            </Grid>

            <Grid sm={3}>
              <motion.div className="FooterSub"
               initial={{ opacity: 0, x: 100 }}
               animate={NewsLetter ?  { opacity: 1, x: 0 } : {}}
               transition={{type: 'spring',damping: 10, stiffness: 100, }}
              >
                <p className="JoinText">Join our newsletter and get 20% off</p>
               
               <div className="ButtonHolder">
               <input
                  type="text"
                  placeholder="Email"
                  className="InputField"
                ></input>
                 <Button variant="contained" className="SubButton">
                  Subscribe
                </Button>
               </div>      
              </motion.div>
            </Grid>
          </Grid>
        </div>

        <hr className="Divider" />

        <div className="FooterLower">
          <p className="LowerFooterText">
          <span className="footerLogoName">Cassello </span>  Copyright © 2023
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  height: 100%;
  background-color: #eeeeee;
  
  .FooterInner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .FooterUpper {
    width: 100%;
    height: 80%;
  }
  .Divider {
    width: 75%;
    opacity: 0.4;
  }
  .LowerFooterText {
    font-size:18px;
    margin-top: 2.5%;
    font-weight: 100;
    text-align: center;
  }
  .GridHolder {
    widht: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 2.5%;
  }
  .FooterLower {
    width: 100%;
    margin-top:0%;
  }
  .footerLogoName {
    font-weight: 700;
    padding-left: 0.5%;
    font-size:20px;
    margin-top:0px;
  }
  .FooterTitle {
    font-size: 17px;
    font-weight: 450;
    text-align: center;
  }
  .FooterSubtitle {
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 100;
    text-align: center;
  }
  .FooterSub {
    position: relative;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .SocialIconHolder {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
  .FooterIcon {
    font-size: 30px;
  }
  .FooterIcon:hover {
    cursor: pointer;
  }
  .InputField {
    height: 45px;
    width: 60%;
    border-radius: 100px 0px 0px 7px;
    border: none;
    text-align:center;
  }
  .InputField::placeholder {
    padding-left:6%;
    text-align:left;
  }
  .InputField:focus {
   
    outline: none;
  }

  .SubButton {
    border-radius: 7px 7px 100px 7px;
    width: 40%;
    height: 45px;
    background-color:#ff5722;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .SubButton:hover{
    background-color:#2d4059 ;
  }
  

  .JoinText {
    margin-bottom: 0px;
    font-size: 23px;
    font-weight: 700;
  }
  .ButtonHolder{
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top:2.5%;
  }
`;

export default Footer;
