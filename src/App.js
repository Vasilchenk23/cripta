import styled from "styled-components";
import icon from "./img/cripta.png";
import bitcoin from "./img/bitcoin.png";
import { AuthProvider } from "./component/auth";

const Body = styled.body`
  margin: -10px -52px;
  max-width: 1584px;
  max-height: 1113px;
  height: 891px;
  padding: 0px 30px;
  background: rgb(211, 78, 214);
  background: linear-gradient(
    63deg,
    rgba(211, 78, 214, 1) 0%,
    rgba(20, 20, 106, 1) 42%,
    rgba(0, 255, 248, 1) 100%
  );
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  cursor: pointer;
  padding: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  border: 1px solid grey;
`;

const Title = styled.div`
  width: 600px;
  height: 400px;
  margin: 250px 0px 0px 150px;
  color: white;

  p {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    margin: 50px;
    text-align: center;
    width: auto;
    height: auto;
  }
`;

const Img = styled.div`
  margin: -500px 0px 0px 800px;

  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <Body>
      <Header>
        <img src={icon} alt="Icon" />
        <div>Pichdeck</div>
        <div>Chat</div>
        <div>Audits</div>
        <div>Buy $PLC</div>
      </Header>
      <Title>
        <h1>NEW PLAY-TO-EARN<br /> ARCADE METAVERSE</h1>
        <p>
          Welcome to the innovative play-to-earn blockchain Metaverse<br />
          where you can realize all of the potential of NFT's collections.
          <br />
          <br />
          Visit the playground, receive rewards, make money with our token,
          <br />
          and check out our games with rare NFT's!
        </p>
        <Button><AuthProvider/></Button>
      </Title>
      <Img>
        <img src={bitcoin} alt="Bitcoin" />
      </Img>
    </Body>
  );
}

export default App;
