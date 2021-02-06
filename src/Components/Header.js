import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Nav
      className="nav-config"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="title-app">
      <span>TASKS</span>TODO
      </Nav.Item>
    </Nav>
  )
}