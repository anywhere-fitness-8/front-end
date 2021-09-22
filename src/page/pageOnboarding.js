import styled from "styled-components";
import CompHeader from "../component/header";
import CompFooter from "../component/footer";
import CompUserOnboarding from "../component/userOnBoarding";

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 89%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

function PageOnboarding(props) {
  return (
    <Container>
      <Header>
        <CompHeader />
      </Header>
      <Main>
        <CompUserOnboarding />
      </Main>
      <Footer>
        <CompFooter />
      </Footer>
    </Container>
  );
}

export default PageOnboarding;
