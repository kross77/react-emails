import React from 'react';

import Grid from '../layout/Grid';

function Body({ children }) {
  return (
    <Grid>
      <Grid.Cell>
        {children}
      </Grid.Cell>
    </Grid>
  );
}

export default Body;

