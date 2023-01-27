import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import SidebarMenu, { Burger } from 'react-bootstrap-sidebar-menu';

const items = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'About',
    link: '/about'
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact'
  },
];

function MySidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Burger onClick={() => setIsOpen(!isOpen)} />
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        positions={['left']}
      >
        <Nav>
          {items.map((item) => (
            <Nav.Link key={item.id} href={item.link}>{item.title}</Nav.Link>
          ))}
        </Nav>
      </SidebarMenu>
    </>
  );
}

export default MySidebar;