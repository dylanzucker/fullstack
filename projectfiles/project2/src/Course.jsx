import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Course extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.course}</TableRowColumn> //Maybe the Course + Title
        <TableRowColumn>{this.props.prof}</TableRowColumn>
        <TableRowColumn>{this.props.time}</TableRowColumn>
        <TableRowColumn>{this.props.crn}</TableRowColumn>
      </TableRow>

    );
  }
}
export default Course;
