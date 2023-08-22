import styled from 'styled-components';

const Element = styled.div<{ $primary?: boolean }>`
  width: 290px;
  height: 100px;
  background-color: ${(props: any) => (props.$primary ? '#FFEBD1' : '#F2F7FC')};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const Heading = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const Head = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 2px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Body = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px; /* 142.857% */
  letter-spacing: 0.35px;
  padding-left: 30px;
  margin-left: 10px;
`;

interface Content {
  heading: string;
  img: string;
  text: string;
}

export function MainContactElement(props: {
  primary: boolean;
  content: Content;
}) {
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
