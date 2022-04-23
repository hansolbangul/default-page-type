import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  /* padding: 20px 20px; */
`;

const Sidebar = styled.div`
  width: 200px;
  min-height: calc(100vh-60px);
  background-color: ${(props) => props.theme.cardBgColor};
  display: block;
`;

function Home() {
  return (
    <Container>
      <Sidebar></Sidebar>
    </Container>
  );
}
export default Home;
