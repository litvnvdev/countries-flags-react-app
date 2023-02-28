import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  background-color: var(--color-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fontsize-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
const ModeSwitcher = styled.div`
  border: 3px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  color: var(--color-text);
  font-size: var(--fontsize-sm);
  text-transform: capitalize;
  cursor: pointer;
  hover:
    background-color: red;
  
`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={changeTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}

            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
