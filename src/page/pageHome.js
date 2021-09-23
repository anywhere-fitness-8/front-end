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
`
const MiddleRightImage = styled.img`

  
  width: 500px;
  height: 250px;
  float: left;
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
            <RightImage src="https://i.gyazo.com/318e7b2e62b9982ff058bce6a9fa6b4d.png" />
          <h2>Sed nunc ligula</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
          </div>
        </Top>

        <div className="middle-content">
          <MiddleRightImage src="https://i.gyazo.com/3ac43920dc12f20ffbf95418859d6a40.png"/>
          <h2>Orci maecenas</h2>    
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
        </div>
        <Top>
        <div className="bottom-content">

          <RightImage src="https://i.gyazo.com/4b35ad987e8866e19fa7d3c971ae8100.png" />

          <h2>Rhoncus magna</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>

        </div>
        </Top>
      </Main>
     
        <CompFooter />
     
    </Container>
  );
}

export default PageHome;
