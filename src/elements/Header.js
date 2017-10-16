import React from 'react';
import styled from 'styled-components';
import Grid from '../layout/Grid';
import Img from './Img';
import Title from './Title';
import logo from '../assets/logo.png';

import theme from '../theme.js'
import Table from './Table.js';

const logoSrc = 'https://s3-eu-west-1.amazonaws.com/sentisis-images/github_public/react-emails/logo.png';

 const Container = styled.div`
   background-color: ${theme.SUB_COLOR}; 
   width: 100%; 
`;

 const SubTitle = styled.div`
    color: ${theme.MAIN_COLOR};
    font-size: 20px;
    font-weight: bold;
 `;

function Header() {
  return (
    <Grid>
      <Container>
          <Img src={logo} alt="logo" />
          <SubTitle>1 Step.</SubTitle>
          <Title>Select location</Title>
      </Container>

    </Grid>
  );
}

export default Header;

