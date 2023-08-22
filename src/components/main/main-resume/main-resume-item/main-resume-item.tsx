import styled from 'styled-components';
import { Content } from '../main-resume-element/main-resume-element';

const Item = styled.div<{ $primary?: boolean }>`
  width: 258px;
  height: 86px;
  background: ${(props: any) => (props.$primary ? '#FFE3BF' : '#FFEED9')};
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  justify-content: center;
  padding-left: 10px;
`;

const Title = styled.p`
  color: rgba(26, 16, 3, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Heading = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// years
// educational
// specialization

export function MainResumeItem(props: { primary: boolean; content: Content }) {
  return (
    <Item $primary={props.primary}>
      <Title>{props.content.years}</Title>
      <Heading>{props.content.place}</Heading>
      <Text>{props.content.value}</Text>
    </Item>
  );
}
