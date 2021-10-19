import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Container from '@material-ui/core/Container';
import styles from './TabContent.module.css';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
function createData(name:any, lastYear:any, mtd:any, qtd:any, ytd:any) {
  return {
    name,
    lastYear,
    mtd,
    qtd,
    ytd,
    history: [
      { clientName: 'Amy Cruciani Needle', clientLastYear: '$0.00', clientMTD: '$0.00', clientQTD: '$0.00', clientYTD: '145,000.00' },
      { clientName: 'Anne Jacob Retirement', clientLastYear: '$0.00', clientMTD: '$0.00', clientQTD: '$209.87', clientYTD: '$3,351.57' },
      { clientName: 'Brent Rudilph, Trustee', clientLastYear: '$14,215.71', clientMTD: '$0.00', clientQTD: '$0.00', clientYTD: '$0.00' },
      { clientName: 'Diane Rosseau', clientLastYear: '$0.00', clientMTD: '$0.00', clientQTD: '$0.00', clientYTD: '$0.00' },
      { clientName: 'Franics Betti', clientLastYear: '$0.00', clientMTD: '$0.00', clientQTD: '$0.00', clientYTD: '$0.00' },
    ],
  };
}
function Row(props:any) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      
      <TableRow className={classes.root}>
        
        <TableCell>
          <IconButton aria-label="expand row" size="small" color='default' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.lastYear}</TableCell>
        <TableCell align="right">{row.mtd}</TableCell>
        <TableCell align="right">{row.qtd}</TableCell>
        <TableCell align="right">{row.ytd}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  <TableCell>Client Name</TableCell>
                  <TableCell align="right">Last Year</TableCell>
                  <TableCell align="right">MTD</TableCell>
                  <TableCell align="right">QTD</TableCell>
                  <TableCell align="right">YTD</TableCell>
                    {/* <TableCell>clientName</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">clientMTD</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow:any) => (
                    <TableRow key={historyRow.clientName}>
                      <TableCell component="th" scope="row">{historyRow.clientName}</TableCell>
                      <TableCell>{historyRow.clientLastYear}</TableCell>
                      <TableCell align="right">{historyRow.clientMTD}</TableCell>
                      <TableCell align="right">{historyRow.clientQTD}</TableCell>
                      <TableCell align="right">{historyRow.clientYTD}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    lastYear: PropTypes.string.isRequired,
    qtd: PropTypes.string.isRequired,
    mtd: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        // clientYTD: PropTypes.string.isRequired,
        // clientQTD: PropTypes.string.isRequired,
        clientMTD: PropTypes.string.isRequired,        
        clientLastYear: PropTypes.string.isRequired,
        clientName: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    ytd: PropTypes.string.isRequired,
  }).isRequired,
};
const rows = [
  createData('Additions', '$73,048.71', '$0.00', '$0.00', '$7,000.00'),
  createData('Proposed', '$12,110,288.44', '$0.00', '$0.00', '$0.00'),
  createData('Terminations', '$2,921,741.03', '$0.00', '$0.00', '-$2,082,844.84'),
  createData('Withdrawls', '$820,478.01', '$0.00', '-$7,926.32', '-$15,726.32'),
  // createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
export default function CollapsibleTable() {
  return (

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" padding='none' >
          <TableHead>
            <TableRow>
              <h4 className={styles.assetMgmt}>Asset Management</h4>
            {/* <Typography variant="h6" gutterBottom component="div">
                Asset Management
              </Typography> */}
              </TableRow>
            <TableRow>
              <TableCell />
              <TableCell></TableCell>
              <TableCell align="right">Last Year</TableCell>
              <TableCell align="right">MTD</TableCell>
              <TableCell align="right">QTD</TableCell>
              <TableCell align="right">YTD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
  );
}