import React from 'react';
import { addDecorator } from '@storybook/react';
import styled from 'styled-components';
import GlobalStyle from '../src/common/global-style';

const Main = styled.main`
  width: 1110px;
  margin: 50px auto;
`;

const withGlobalStyle = (storyFn) => (
    <React.Fragment>
      <GlobalStyle />
      <Main>
        {storyFn()}
      </Main>
    </React.Fragment>
);

addDecorator(withGlobalStyle);
