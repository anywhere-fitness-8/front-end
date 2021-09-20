import styled from "styled-components";
import CompHeader from "../component/header";
import CompFooter from "../component/footer";
import CompFormLogin from "../component/formLogIn";
import CompUserOnboarding from "../component/userOnBoarding";

const Container = styled.div`
  border: 1px solid black;
  height: 95vh;
  width: 80vw;
  margin: 2.5vh 10vw 2.5vh 10vw;
  padding: 0;
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
  border: solid 1px red;
`;
function PageLogIn(props) {
  return (
    <Container>
      <Header>
        <CompHeader />
      </Header>
      <Main>
        <h2>PageLogIn.js</h2>
        <CompFormLogin />
        <CompUserOnboarding />
      </Main>
      <Footer>
        <CompFooter />
      </Footer>
    </Container>
  );
}

export default PageLogIn;
