import styled from "styled-components";
import { Colors, Devices } from "../Theme";
import Button from "../styled/Button.styled";

const NewsLetterEl = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: url("/images/subscribe.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6rem 1rem;
  gap: 1rem;

  @media ${Devices.MobileL} {
    padding: 6rem 4rem;
  }
  @media ${Devices.Tablet} {
    padding: 6rem;
  }
  @media ${Devices.Laptop} {
    padding: 6rem 30%;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 5vw;
  @media ${Devices.Laptop} {
    font-size: 4vw;
  }
`;
const Sub = styled.span`
  font-size: 1.12rem;
`;
const Input = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;

  > input {
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 0.5rem 1rem;
    font-size: 1.05rem;
    flex: 1;
  }
`;
const Btn = styled(Button)`
  border-radius: 0 5px 5px 0;
  font-weight: 600;
  font-size: 1.01rem;
`;
const Text = styled.p`
  font-size: 0.85rem;
`;
const PL = styled.a`
  color: ${Colors.Primary};
`;
const ChBox = styled.div`
  font-size: 0.85rem;

  input {
    margin-right: 1rem;
  }
`;

export default function NewsLetter() {
  return (
    <NewsLetterEl>
      <Title>What we provide ?</Title>
      <Sub>Whether you&apos;re an investor seeking opportunities or someone looking for a place to call home, our platform caters to your needs. You can securely hold, buy, sell, and rent digital asset properties with us. Each property or holding is minted as an NFT, ensuring authenticity and traceability. </Sub>
     {/* <Input>
        <input type="email" placeholder="Email" />
        <Btn>Subscribe</Btn>
      </Input>  */}
      <Sub>
        We are working on to equip you with the most up-to-date property price trends, data feeds, and real-world insights. By connecting you with the current market scenario, we ensure that you receive what you truly deserve in your real estate endeavors.<PL href="#"></PL>
       
      </Sub>
      {/* <ChBox>
        <input type="checkbox" id="NewsSub" />
        <label htmlFor="NewsSub">
          By entering my email and subscribing I confirm and agree to the above.
        </label>
      </ChBox> */}
    </NewsLetterEl>
  );
}
