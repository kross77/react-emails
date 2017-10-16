import React from 'react';

/**
 * This grid allows you to be less verbose by only defining whay you need:
 *
 *    <Grid>
 *      <Grid.Row>
 *        <Grid.Cell>
 *          <p>Foo</p>
 *        </Grid.Cell>
 *      </Grid.Row>
 *    </Grid>
 *
 * Is equivalent of:
 *
 *    <Grid>
 *      <p>Foo</p>
 *    </Grid>
 *
 * Ad the missing row and cell declaration are autmatically added.
 *
 *
 * Examples
 * --------
 *
 * Render two cells in a row
 *
 *    <Grid>
 *      <Grid.Row>
*          <p>I'm in the first cell</p>
*          <p>I'm in the second cell</p>
 *      </Grid.Row>
 *    </Grid>
 *
 * Render two paragraphs in a cell
 *
 *    <Grid>
 *      <Grid.Cell>
*          <p>I'm in the first cell</p>
*          <p>I'm in the second cell</p>
 *      </Grid.RRowow>
 *    </Grid>
 *
 */

const tableStyle = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

function Cell({ children, style = {}, className }) {
  return <td style={style} className={className}>{children}</td>;
}

function Row({ children, style = {}, className }) {
  return (
    <tr style={style} className={className}>
      {React.Children.map(children, (el) => {
        if (el.type === Cell) return el;
        return <td>{el}</td>;
      })}
    </tr>
  );
}

function Grid({ children, style = {}, className }) {
  return (
    <table className={className} style={{ ...tableStyle.table, ...style }}>
      <tbody>
        {React.Children.map(children, (el) => {
          if (!el) return;

          // We want this content the be on it's own row.
          if (el.type === Row) return el;

          // The content is all inside a single cell (so a row)
          if (el.type === Cell) {
            return <tr>{el}</tr>;
          }

          // The content is one cell inside it's own row
          return (
            <tr>
              <td>{el}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Grid.Row = Row;
Grid.Cell = Cell;

export default Grid;

