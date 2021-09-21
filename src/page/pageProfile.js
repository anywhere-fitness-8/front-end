import styled from "styled-components";
import CompHeader from "../component/header";
import CompFooter from "../component/footer";
import CompFormProfile from "../component/formProfile";

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
`;
function PageProfile(props) {
  return (
    <Container>
      <Header>
        <CompHeader />
      </Header>
      <Main>
        <h2>PageProfile.js</h2>
        <p>
          Need to be authenticated as Student or Instructor to use this page
        </p>
        <CompFormProfile />
      </Main>
      <Footer>
        <CompFooter />
      </Footer>
    </Container>
  );
}

export default PageProfile;
