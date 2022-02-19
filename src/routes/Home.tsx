import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fetchCoins } from './api';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Coin = styled.li`
//   background-color: ${(props) => props.theme.cardBgColor};
//   color: ${(props) => props.theme.textColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   border: 1px solid white;
//   a {
//     display: flex;
//     align-items: center;
//     padding: 20px;
//     transition: color 0.2s ease-in;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

interface Icoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Home() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<Icoin[]>('allCoins', fetchCoins);
  console.log(isLoading, data);
  return (
    <Container>
      <Header>
        <Title>theme 변경</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
        <Link to="/hello" state={{ name: 'hello' }}>
          Link
        </Link>
      </Header>
      {isDark}
    </Container>
  );
}
export default Home;
