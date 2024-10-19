import { FC } from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
  background-color: red;
`;

export const TopBar: FC = () => {
  return (
    <Wraper>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} />
      </div>
      <ul>
        <li>link 1</li>
        <li>link 2</li>
        <li>link 3</li>
      </ul>
    </Wraper>
  );
};
