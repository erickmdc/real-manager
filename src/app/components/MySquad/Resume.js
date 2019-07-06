import React from 'react'
import {
    withStyles, Grid, Typography, Table,
    TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';
import styles from '../utils/styles';

export default withStyles(styles)(({ classes }) =>
            <Grid container spacing={4} style={{ marginBottom: 0 }} justify="center" alignItems="center">
                <Grid item lg={4}>
                    <Typography variant="body1" align="center">
                        60.3
                        </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Pontuação
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body1" color="textSecondary" align="center">
                        52.87
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Média
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body1" color="textSecondary" align="center">
                        495.13
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Total
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="h4" align="center">
                        1.23 / 149.54 $
                    </Typography>
                    <Typography color="textSecondary" align="center">
                        Patrimônio
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Typography component="p" align="center">
                        6º na liga com 232 times
                    </Typography>
                </Grid>
                {/* <Grid item lg={12}>
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
                        </TableBody>
                    </Table>
                </Grid> */}
            </Grid>
);