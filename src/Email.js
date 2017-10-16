import React from 'react';
import styled from 'styled-components';
import Grid from './layout/Grid';
import Title from './elements/Title';
import Header from './elements/Header';
import Locations from './elements/Locations';
import Body from './elements/Body';
import theme from './theme'
import CategoryHeader from "./elements/CategoryHeader";
import Span from "./elements/Span";
import Location from "./elements/Location";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledGrid = styled(Grid)`
  position: relative;
  max-width: 800px;
  width: 100%;
`;

const TestRow = styled(Grid.Row)`
  background: red;
  width: 100%;
`

const StyledLocations = styled(Locations)`
 
  div:nth-child(2n){
    margin-left: 20px;

  }
  width: 100%;
`;

function Email({data}) {
    return (
        <Container>
            <center>
                <StyledGrid>
                    <Header/>
                    <Span height='10px'/>
                    <Grid.Row>
                       <CategoryHeader>HELSINKI</CategoryHeader>
                    </Grid.Row>
                    <Grid.Row className='locations-block'>
                        <StyledLocations className='locations'>
                            <Location />
                            <Location />
                            <Location />
                            <Location />
                        </StyledLocations>
                    </Grid.Row>
                </StyledGrid>
            </center>
        </Container>
    );
}

export default Email;

