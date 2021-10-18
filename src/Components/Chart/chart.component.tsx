import React from 'react';
import CustomHighcharts from './highCharts.component';
import { Nav } from 'react-bootstrap';
import styles from './chart.module.css';

const year: any = (new Date()).getFullYear();
var years: any = Array.from(new Array(20), (val, index) => index + year);

const Chart = () => {



    return (
        <div>
            <div className={styles.chartContainer} >

                <div style={{ display: 'flex' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            <Nav.Item>
                                <Nav.Link href="/home" disabled>AUM</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link style={{ borderBottom: 'solid 2px', color: '#0864b4' }} eventKey="link-1">Net Flows</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div>

                            <select>
                                {
                                    years.map((year: any, index: any) => {
                                        return <option key={`year${index}`} value={year}>{year}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <select>
                                {
                                    years.map((year: any, index: any) => {
                                        return <option key={`year${index}`} value={year}>{year}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <CustomHighcharts />
            </div>
        </div>
    );

}

export default Chart;