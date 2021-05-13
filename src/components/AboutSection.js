import React from "react";
import home1 from "../img/home1.png";

//Motion
import { motion } from "framer-motion";
import { titleAnime, photoAnime, fade } from "../Animation";
import Wave from "../components/Wave";
//styled
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../Styled";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnime}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
        </motion.p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnime}
          src={home1}
          alt="guy with camera"
        ></motion.img>
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
