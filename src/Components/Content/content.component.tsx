import React from 'react';
import CollapsibleTable from './TabContent';
import styles from './Content.module.css'
import Chart from '../Chart/chart.component';
import CustomSeparator from '../NavBar/navBar.component';
import { Box, Container, Grid } from '@material-ui/core';
import NativeSelectDemo from './selectBox.component';

export const ContentComponent = () => {
    const { tables, contentContainer, netFlows } = styles
    return (
        <Box className={contentContainer}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={7}>
                    <p className={netFlows}>Net Flows</p>
                    <h3>{CustomSeparator()}</h3>
                </Grid>
                <Grid item xs={4}>
                    {NativeSelectDemo()}
                </Grid>
                <Grid item xs={12}  >
                    <div className="container" >
                        <div className="card">
                            <div className="card-body">
                                <Chart />

                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}  >
                    <div className="card">
                        <div className="card-body">
                            {CollapsibleTable()}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

