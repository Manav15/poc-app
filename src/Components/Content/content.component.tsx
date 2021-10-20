import React from 'react';
import CollapsibleTable from './TabContent';
import styles from './Content.module.css'
import Chart from '../Chart/chart.component';
import CustomSeparator from '../NavBar/navBar.component';

import { Box, Container, Grid } from '@material-ui/core';


export const ContentComponent = () => {
    const { tables, contentContainer, netFlows } = styles
    return (
        <Box className={contentContainer}>
            <Grid container spacing={2}>
                <Grid item>
                    <p className={netFlows}>Net Flows</p>              
                <h3>{CustomSeparator()}</h3>
                </Grid>
                <Grid item xs ={12}  >
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

