import React from 'react'
import {
    withStyles, Grid, Typography, Table,
    TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';
import styles from '../utils/styles';

export default withStyles(styles)(({ classes }) =>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Rodada</TableCell>
                                <TableCell>Pontuação</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>7ª</TableCell>
                                <TableCell>70.94</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
);