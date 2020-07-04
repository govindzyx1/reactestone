import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";


export default class PersonList extends React.Component {
  state = {
    persons: [],
    classes:"",
  }



  componentDidMount() {
    axios.get(`http://localhost:1337/restaurants`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons })
      })
  }

 
  

  render() {
    return (
      <TableContainer component={Paper}>
      <Table className={this.state.classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">address</TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.persons.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
    
} 
