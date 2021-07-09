// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from "react-router-dom";

import Container from '../Container';
// import GitHubButton from '../GitHubButton';

import sections from '../../pages';


import { ReactComponent as Logo } from './logo.svg'

const Header = () => {
  const [activeNav, setActiveNav] = useState('/home');
  const location = useLocation()

  console.log(location, sections, useParams());
  const renderMenu =()=> {

    const items = sections.map(section => {
      if (!section.disabled) {
        return (
          <li key={section.id}>
            <NavLink to={section.id} activeClassName="selected">
              {section.title}
            </NavLink>
          </li>
        );
      } else {
        return null;
      }
    });

    return (
      <ul className="nav">
        {items}
      </ul>
    );
  }
  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__content">
          <div className="header__brand">
            <Logo />
          </div>
          <nav className="navigation">
            {renderMenu()}
          </nav>
          <div className="right">
            {/*<GitHubButton*/}
            {/*  user="jiali0126"*/}
            {/*  repo="react-bnb-gallery"*/}
            {/*/>*/}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
