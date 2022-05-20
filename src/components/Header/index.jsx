import { memo, useCallback } from 'react';

import { Flex } from '../UI';
import logo from '../../assets/images/logo.svg';

import { HeaderWrapper } from './Header.styles';

const Header = memo(({ setActive }) => {
  const clickOpenModal = useCallback(() => setActive(true), []);
  return (
    <HeaderWrapper>
      <Flex jContent={'space-between'}>
        <h1>Cat posts</h1>
        <img width="50" src={logo} alt="Pizza logo" />
        <button onClick={clickOpenModal}>Favorites</button>
      </Flex>
    </HeaderWrapper>
  );
});

export default Header;
