import React from 'react';
import MemberProfile from './MemberProfile';

import avatar from '../../../assets/icons/AVATAR-GUIL.svg';
import button1 from '../../../assets/icons/button1.png';
import button2 from '../../../assets/icons/BUTTON-2.svg';
import button3 from '../../../assets/icons/BUTTON-3.svg';
import button4 from '../../../assets/icons/BUTTON-4.svg';

import HTML from '../../../assets/icons/HTML.svg';
import CSS from '../../../assets/icons/CSS.svg';
import JavaScript from '../../../assets/icons/JAVASCRIPT.svg';
import SQL from '../../../assets/icons/MYSQL.svg';
import Figma from '../../../assets/icons/FIGMA.svg';

const Kate = () => {
  return (
    <MemberProfile
      name="Kate Serrano"
      title="Frontend Developer, Designer"
      email="kateserrano@gmail.com"
      hashtag="#ByteMeKate"
      avatar={avatar}
      buttons={[
        { src: button1, alt: "Tools" },
        { src: button2, alt: "Folder" },
        { src: button3, alt: "Thumbs up" },
        { src: button4, alt: "Speech" },
      ]}
      tools={[
        { src: HTML, label: "HTML" },
        { src: CSS, label: "CSS" },
        { src: JavaScript, label: "Javascript" },
        { src: SQL, label: "MySQL" },
        { src: Figma, label: "Figma" },
      ]}
    />
  );
};

export default Kate;
