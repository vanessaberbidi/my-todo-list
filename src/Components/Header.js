import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../img/logo-mobile.svg';

export default function Header() {
  return (
    <Nav
      className="nav-config"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="title-app">
      <span>TODO</span>LIST
      </Nav.Item>
      <Nav.Item>
        <img className="logo" src={ logo } alt="logo emix"/>
      </Nav.Item>
    </Nav>
  )
}