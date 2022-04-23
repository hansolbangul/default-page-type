import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atoms';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoThreeBars, GoX } from 'react-icons/go';

const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  /* background-color: black; */
  border-bottom: 1px solid gray;
`;

const Section = styled.div`
  width: 10%;
  display: block;
`;

const NavMenu = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};
    padding: 0px 20px;
  }
  a:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const HeaderView = styled.div`
  height: 60px;
`;

const MobileMenu = styled.div<{ visible: string; move: string }>`
  top: 60px;
  height: calc(100vh - 60px);
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
  z-index: 200;
  position: absolute;
  right: ${(props) => props.move};
  visibility: ${(props) => props.visible};
  transition: all ease 0.5s;
  a {
    text-align: center;
    padding: 10px 0px;
  }
`;

interface Iprops {
  name: string;
}

const Routers = (props: Iprops) => {
  return (
    <>
      <Link className={props.name} to="/">
        MAIN
      </Link>
      <Link className={props.name} to="/coin">
        COIN
      </Link>
      <Link className={props.name} to="/portfolio">
        PORTFOLIO
      </Link>
      <Link className={props.name} to="/info">
        INFO
      </Link>
    </>
  );
};
function Header() {
  const [isMenu, setIsMenu] = useState(false);
  console.log(isMenu);
  return (
    <>
      <Nav>
        <Section></Section>
        <NavMenu>
          <Routers name="pc" />
        </NavMenu>
        <Section style={{ textAlign: 'right', padding: '40px' }}>
          {isMenu ? (
            <GoX onClick={() => setIsMenu(!isMenu)} className="m" />
          ) : (
            <GoThreeBars onClick={() => setIsMenu(!isMenu)} className="m" />
          )}
        </Section>
        <MobileMenu move={isMenu ? '0px' : '-10000px'} visible={isMenu ? 'visible' : 'hidden'}>
          <Routers name="m" />
        </MobileMenu>
      </Nav>
      <HeaderView></HeaderView>
    </>
  );
}
export default Header;
