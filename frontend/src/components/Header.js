
import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu inverted color='red' borderless style={{ height: '5rem', fontSize: '1.2rem', lineHeight: '5rem' }}>
      <Menu.Item as='a' header>
        <img src='/images/logo-kanga.png' alt='Logo' style={{ marginRight: '1.5em' }} />
        Recipe Sharing Website
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item as='a' href='/' name='home' active={false}>
          Home
        </Menu.Item>
        <Menu.Item as='a' href='/about' name='about' active={false}>
          About
        </Menu.Item>
        <Menu.Item as='a' href='/recipes' name='recipes' active={false}>
          Recipes
        </Menu.Item>
        <Menu.Item as='a' href='/contact' name='contact' active={false}>
          Contact
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;