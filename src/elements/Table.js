import React from 'react';
import styled from 'styled-components';
import theme from '../theme.js';

const style = {

    tab: {
        width: '50%',
        backgroundColor: theme.MAIN_COLOR,
        borderCollapse: 'collapse',
        backgroundColor: 'red',
    helsenki: {
            fontSize: '30px',
            color: '#0678D5',
    }
},
}

function Table () {
    return (
    <table className='tab'>
        <tr className='helsenki'>HELSENKI</tr>

        <tr>
            <th>AUTOSPA ISO-EROTTAJA</th>
        </tr>
        <tr>
            <th>HELSINKI, YRJONKATU 8-10 00120</th>
        </tr>
        <br/>
        <tr>Aukioloajat:</tr>
        <tr><td>MA</td><td>08:00 - 18:00</td></tr>
        <tr><td>MA</td><td>08:00 - 18:00</td></tr>
        <tr><td>MA</td><td>08:00 - 18:00</td></tr>
        <tr><td>MA</td><td>08:00 - 18:00</td></tr>
        <tr><td>MA</td><td>08:00 - 18:00</td></tr>
        <tr><td>MA</td><td>08:00 - 18:00</td></tr>
        <tr><td>SU</td><td>Suljettu</td></tr>
        <tr>VALISTE</tr>

    </table>
    );
}

export default Table;