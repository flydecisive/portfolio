import styled from 'styled-components';

const Element = styled.div<{ $primary?: boolean }>`
  width: 290px;
  height: 136px;
  background-color: ${(props) => (props.$primary ? '#FFEBD1' : '#F2F7FC')};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const Heading = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2px;
`;

const Body = styled.p`
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 142.857% */
  letter-spacing: 0.35px;
  text-align: center;
`;

interface Content {
  heading: string;
  img: string;
  text: string;
}

export function MainHomeElement(props: { primary: boolean; content: Content }) {
  return (
    <Element $primary={props.primary}>
      <Head>
        <img src={props.content.img} alt="code" />
        <Heading>{props.content.heading}</Heading>
      </Head>
      <Body>{props.content.text}</Body>
    </Element>
  );
}
