import React from 'react'
import {
  withStyles, Grid, Typography, Table, Tooltip,
  TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';
import styles from '../utils/styles';

const fakeData = [
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ],
  [1, 'Barcelona', 10, 7, 1, 2, 23, 17, 6, 22 ]
];

export default withStyles(styles)(({ classes }) =>
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell style={{ backgroundColor: 'white', position: 'sticky', left: 0 }}></TableCell>
        <TableCell style={{ backgroundColor: 'white', position: 'sticky', left: 42 }}>Time</TableCell>
        <TableCell>{"J"}</TableCell>
        <TableCell>{"V"}</TableCell>
        <TableCell>{"E"}</TableCell>
        <TableCell>{"D"}</TableCell>
        <TableCell>{"GM"}</TableCell>
        <TableCell>{"GS"}</TableCell>
        <TableCell>{"SG"}</TableCell>
        <TableCell>{"P"}</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {fakeData.map((data, index) => (
        <TableRow key={index}>
        <TableCell style={{ backgroundColor: 'white', position: 'sticky', left: 0 }}>{`${data[0]}º`}</TableCell>
        <TableCell style={{ backgroundColor: 'white', position: 'sticky', left: 42 }}>{data[1]}</TableCell>
        <TableCell>{data[2]}</TableCell>
        <TableCell>{data[3]}</TableCell>
        <TableCell>{data[4]}</TableCell>
        <TableCell>{data[5]}</TableCell>
        <TableCell>{data[6]}</TableCell>
        <TableCell>{data[7]}</TableCell>
        <TableCell>{data[8]}</TableCell>
        <TableCell><Typography variant="h6">{data[9]}</Typography></TableCell>
      </TableRow>
      ))}
    </TableBody>
  </Table>
);