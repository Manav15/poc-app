import React from 'react';
import CollapsibleTable from './TabContent';
import styles from './Content.module.css'
import Chart from '../Chart/chart.component';


export const ContentComponent = () => {
    return (
        <div>
            <div className="container" >
                <div className="card">
                    <div className="card-body">
                        <Chart />

                    </div>
                </div>
            </div>

            <div className={styles.Tables}>
                {CollapsibleTable()}
            </div>
        </div>
    )
}

