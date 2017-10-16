import React from 'react';
import styled from 'styled-components';
import Grid from '../layout/Grid';
import theme from '../theme.js'
import SubTitle from './SubTitle';
import Span from "./Span";

const Wrapper = styled.div`
   background-color: ${theme.SUB_COLOR}; 
   width: 390px;
   height: 283px; 
   float: left;
   margin-bottom: 20px;
`;
const WrapperSchedule = styled.div`
    width: 100%;
    margin-bottom: 17px;
`;
const Button = styled.a`
   background-color: ${theme.MAIN_COLOR}; 
   height: 30px;
   width: 90px;
   padding: 5px 6px;
   text-decoration: none;
   color: ${theme.SUB_COLOR};
   font-weight: bold;
  
   font-size: 12.6px;	
   font-weight: 600;	
   line-height: 17px;	
   text-align: center;
   
   &:hover{
    color: ${theme.MAIN_COLOR};
    background-color: ${theme.SUB_COLOR}; 
   }
`;
const LocationTitle = styled(SubTitle)`
   	width: 100%;
	text-align: center;
	padding-top: 13px;
`;
const LocationAddress = styled.div`
	height: 20px;
	width: 100%;
	color: #8B8B8B;
	font-size: 15px;
	font-style: italic;
	line-height: 20px;
	text-align: center;

`;
const ScheduleTitle = styled.div`
	height: 27px;
	width: 100%;
	color: ${theme.LOCATION_COLOR};
	font-size: 16px;
	font-weight: 600;
	line-height: 18px;
	text-align: center;
    margin-top: 21px; 
`;
const ScheduleName = styled.div`
	height: 13px;
	width: 37px;
	color: ${theme.LOCATION_COLOR};
	font-size: 9px;
	font-weight: bold;
	line-height: 13px;
`;
const ScheduleStyle = styled.div`
	height: 18px;
	font-size: 14px;
	font-weight: 300;
	line-height: 16px;
`;
const ScheduleTimeBegin = styled(ScheduleStyle)`
	/* width: 52px; */
	color: ${theme.LOCATION_COLOR};
`;
const ScheduleTimeEnd = styled(ScheduleStyle)`
	/* width: 64px; */
	color: ${theme.LOCATION_COLOR};
`;
const ScheduleNameWeekend = styled.div`
	height: 11px;
	 width: 100%; 
	color: #FA5E5E;
	font-size: 8.5px;
	font-weight: bold;
	line-height: 8.5px;
`;
const TextWeekend = styled((ScheduleStyle))`
      width: 100%; 
	color: #FA5E5E;
`;
const SpanStyle = styled(Span)`
   color: #626262;
`;

function Location() {
    return (
            <Wrapper>
                <Grid>
                    <Grid.Row>
                        <LocationTitle>AUTOSPA ISO-EROTTAJA</LocationTitle>
                    </Grid.Row>
                    <Grid.Row>
                        <LocationAddress>HELSINKI, Yrjönkatu 8–10 00120 </LocationAddress>
                    </Grid.Row>
                    <center>
                    <WrapperSchedule className='wrapper-schedule'>
                    <Grid.Cell>
                            <ScheduleTitle>Aukioloajat:</ScheduleTitle>
                            <Grid.Row>
                                <ScheduleName>MA</ScheduleName>
                                <ScheduleTimeBegin>08:00</ScheduleTimeBegin>
                                <SpanStyle width='0.61px' height='9.75px'/>
                                <ScheduleTimeEnd>18:00</ScheduleTimeEnd>
                            </Grid.Row>
                        <Grid.Row>
                            <ScheduleName>MA</ScheduleName>
                            <ScheduleTimeBegin>08:00</ScheduleTimeBegin>
                            <ScheduleTimeEnd>18:00</ScheduleTimeEnd>
                        </Grid.Row>
                        <Grid.Row>
                            <ScheduleName>MA</ScheduleName>
                            <ScheduleTimeBegin>08:00</ScheduleTimeBegin>
                            <ScheduleTimeEnd>18:00</ScheduleTimeEnd>
                        </Grid.Row>
                        <Grid.Row>
                            <ScheduleName>MA</ScheduleName>
                            <ScheduleTimeBegin>08:00</ScheduleTimeBegin>
                            <ScheduleTimeEnd>18:00</ScheduleTimeEnd>
                        </Grid.Row>
                        <Grid.Row>
                            <ScheduleName>MA</ScheduleName>
                            <ScheduleTimeBegin>08:00</ScheduleTimeBegin>
                            <ScheduleTimeEnd>18:00</ScheduleTimeEnd>
                        </Grid.Row>
                        <Grid.Row>
                            <ScheduleName>MA</ScheduleName>
                            <ScheduleTimeBegin>08:00</ScheduleTimeBegin>
                            <ScheduleTimeEnd>18:00</ScheduleTimeEnd>
                        </Grid.Row>
                        <Grid.Row>
                            <ScheduleNameWeekend>SU</ScheduleNameWeekend>
                            <TextWeekend>suljettu</TextWeekend>
                        </Grid.Row>
                    </Grid.Cell>
                </WrapperSchedule>
                    <Grid.Row>
                        <Button href='#button'>VALISTE</Button>
                    </Grid.Row>
                    </center>
                </Grid>
            </Wrapper>
    );
}

export default Location;

