import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
           <DiCssdeck size="3rem" /> <Span >Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      
      {/* New link for Contact */}
      <li>
        <Link href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/bxgio">
         <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bagionjr13/">
         <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/bagio10rose/">
         <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
