import styled from "styled-components";
import CompHeader from "../component/header";
import CompFooter from "../component/footer";

const Container = styled.div`
  height: 95vh;
  width: 80vw;
  margin: 2.5vh 10vw 2.5vh 10vw;
  padding: 0;
  background-color: whitesmoke;
  border-radius: 20px 20px 0 0;
`;
const Header = styled.header`
  height: 5%;
  width: 100%;
`;
const Footer = styled.footer`
  height: 10%;
  width: 100%;
`;
const Main = styled.main`
  height: 89%;
  width: 100%;
  margin: 0;
  padding: 0;
`;
function PageHome(props) {
  return (
    <Container>
      <Header>
        <CompHeader />
      </Header>
      <Main>
        <h2>Home.js</h2>
      </Main>
      <Footer>
        <CompFooter />
      </Footer>
    </Container>
  );
}

export default PageHome;
