import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Course from './Course.jsx';
import _ from 'lodash';

class CourseList extends Component {
  buildComps(courses) {
    return _.map(courses, course => (<Course key={course.course + course.crn} {...course}/>))
  }
  render() {
    return (
      <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Course</TableHeaderColumn>
            <TableHeaderColumn>Professor</TableHeaderColumn>
            <TableHeaderColumn>Time</TableHeaderColumn>
            <TableHeaderColumn>CRN</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.buildComps(this.props.courses)}
        </TableBody>
      </Table>
      </div>


    );
  }
}
export default CourseList;
