import React from 'react';
import CollapsibleTable from './TabContent';
import CustomSeparator from '../NavBar/navBar.component';
import styles from './Content.module.css';
import { Box, Container, Grid } from '@material-ui/core';


export const ContentComponent = () => {
    const { tables, contentContainer } = styles
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item>
                    <h3>Net Flows</h3>
                </Grid>
                <Grid item>
                    {CustomSeparator()}
                </Grid>
                <Grid item xs={12} >
                    {CollapsibleTable()}
                </Grid>
            </Grid>
        </Box>
    )
}

