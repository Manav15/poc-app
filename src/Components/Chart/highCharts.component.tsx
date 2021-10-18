import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    // subtitle: {
    //   text: 'Source: WorldClimate.com'
    // },
    xAxis: {
        categories: [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021YTD'

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Netflows (millions)'
        }
    },
    tooltip: {
        headerFormat: '<table>',
        pointFormat: '<tr><td style="padding:0"><span style="height:7px;width:7px;background-color:{series.color};border-radius:50%;display:inline-block;margin-right:3px;"></span></td>' +
            '<td style="padding:0"><b> ${point.y:.5f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor: '#f7f7f7',
        //   borderColor: '#f7f7f7',
        border: 'solid 0 rgba(255, 255, 255, 0)',
        //   padding: '13px 15px 28px 17px',
        boxShadow: '0 3px 8px 0 rgba(25, 42, 70, 0.13)',
        position: 'absolute',
        top: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: '#f7f7f7 transparent transparent transparent'
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Additions',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1],
        color: '#004795'

    }, {
        name: 'Net Flows',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5],
        color: '#64b3ec'

    }]
}

const CustomHighcharts = () => <div>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
</div>

export default CustomHighcharts;




