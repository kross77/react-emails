import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme.js'

const Span = styled.div`
    width: ${({width = "100%"}) => width};
    height: ${({height = "100%"}) => height};
 `;

Span.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Span;