const Container = styled.div`
   background-color: ${theme.SUB_COLOR}; 
   width: 100%; 
`;

const SubTitle = styled.div`
    color: ${theme.MAIN_COLOR};
    font-size: 20px;
    font-weight: bold;
 `;

const StyledName = styled(name)
function Schedule({className, name, timeBegin, timeEnd}) {
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

export default Schedule;
