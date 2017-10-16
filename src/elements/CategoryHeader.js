import React from 'react';
import styled from 'styled-components';
import theme from '../theme.js'
import Title from './Title'

const Wrapper = styled.div`
    height: 41px;
    width: 100%;
    opacity: 0.62;
    background-color: #FFFFFF;
    text-transform: uppercase;
    margin: 14px 0;
    padding: 0 40px;
 `;


const CategoryHeader = ({children}) => (
    <Wrapper>
        <Title>{children}</Title>
    </Wrapper>
);

export default CategoryHeader;