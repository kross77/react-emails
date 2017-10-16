import React from 'react';


function Locations({className, children}) {
    return (
            <center className={className}>
                {children}
            </center>
    );
}

export default Locations;

