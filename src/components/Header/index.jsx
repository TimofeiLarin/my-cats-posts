import React from 'react';

import { Flex } from '../UI';
import logo from '../../assets/images/logo.svg';

import { HeaderWrapper } from './Header.styles';


const Header = () => {
  return (
    <HeaderWrapper>
      <Flex jContent={'space-between'}>
        <h1>Cat posts</h1>
        <img width="50" src={logo} alt="Pizza logo" />
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
