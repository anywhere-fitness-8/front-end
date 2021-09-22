import styled from "styled-components";
import CompHeader from "../component/header";
import CompFooter from "../component/footer";


const Container = styled.div`
  height: 106vh;
  width: 80vw;
  margin: 2.5vh 10vw 2.5vh 10vw;
  padding: 0;
  background-color: whitesmoke;
  border-radius: 20px 20px 0 0;
`;
const Top = styled.div`

  justify-content: right;
  float: left;
`
const RightImage = styled.img`

  margin-left: 128px;
  width: 500px;
  height: 250px;
  float: right;
  border-radius: 13px;
`
const MiddleRightImage = styled.img`

  
  width: 500px;
  height: 250px;
  float: left;
  border-radius: 13px;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: auto;
  padding: 3vh 1vw;
`;

function PageHome(props) {
  return (
    <Container>
     
        <CompHeader />
    
      <Main>
        <h1>Welcome</h1>
        <Top>
          <div className="top-content">
            <RightImage src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" />
          <h2>Yoga</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est eros, rhoncus eget lacus nec, luctus pretium ligula. Ut ac metus nulla. Proin et elit et ligula tempus congue. Sed nisi metus, rutrum sit amet ex at, varius vestibulum urna. Phasellus malesuada ipsum vel augue faucibus, sed imperdiet tortor aliquet.</p>
          </div>
        </Top>

        <div className="middle-content">
          <MiddleRightImage src="https://gracewaysports.com/wp-content/uploads/2014/11/ssportscentre_137-edit.jpg"/>
          <h2>Tae Bo</h2>    
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est eros, rhoncus eget lacus nec, luctus pretium ligula. Ut ac metus nulla. Proin et elit et ligula tempus congue. Sed nisi metus, rutrum sit amet ex at, varius vestibulum urna. Phasellus malesuada ipsum vel augue faucibus, sed imperdiet tortor aliquet.</p>
        </div>
        <Top>
        <div className="bottom-content">

          <RightImage src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2017%2F08%2F03212132%2Fwide-jazzercise.jpg&q=85" />

          <h2>Jazzercise</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est eros, rhoncus eget lacus nec, luctus pretium ligula. Ut ac metus nulla. Proin et elit et ligula tempus congue. Sed nisi metus, rutrum sit amet ex at, varius vestibulum urna. Phasellus malesuada ipsum vel augue faucibus, sed imperdiet tortor aliquet.</p>

        </div>
        </Top>
      </Main>
     
        <CompFooter />
     
    </Container>
  );
}

export default PageHome;
