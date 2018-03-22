import React, { Component } from 'react';
import {RaisedButton, TextField, IconButton} from 'material-ui';
import Course from './Course.jsx';
import './App.css';
import _ from 'lodash';
import CourseList from './CourseList.jsx';

import LeftArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
/*
Use Material.io/icons to get import for left and right icons
Then fetch with an offset and load new table
Look at icon buttons in mui
leftArrow instead of font icon
*/

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchText:'',
      result:[],
      pageNumber:0
    }
    this.search=this.search.bind(this)
    this.onSearchChanged=this.onSearchChanged.bind(this)
    this.handleKeyPressed=this.handleKeyPressed.bind(this)
  }
  onSearchChanged(evt, text) {
    this.setState({searchText:text})
  }
  search(page=0,limit=10) {
    fetch(`https://www.eg.bucknell.edu/~amm042/service/q?text=${this.state.searchText}&skip=${page*limit}&limit=${limit}`)
      .then(res => res.json())
      .then(res => {
          if(res.result!=="success"){
            throw Error("Search failed")
          }
          return res.message
       })
       .then(data=> {
         return _(data).map(course=>{
           const {CRN, Department, CrseNum, Instructor} = course
           return {
             crn: CRN,
             course: `${Department} ${CrseNum}`,
             prof: Instructor,
             time: course["Meeting Time"]
           }
         }).sortBy(['course', 'prof', 'time', 'crn'])
         .compact().value()
       })
       .then(data => {
         if(data.length != 0) {
            console.log(data)
            this.setState({result:data})
          }
          else{
            this.setState({pageNumber: this.state.pageNumber-1})
          }
        }
       )
  }
  getPageModifier(delta){
    return ()=> {
      if(!(this.state.pageNumber==0 && delta < 0)){
      this.setState({pageNumber:this.state.pageNumber+delta},() => {
        this.search(this.state.pageNumber)
      })
    }

    }
  }
  handleKeyPressed(e) {
    this.setState({pageNumber:0})
    this.search()
  }
  render() {
    return (
      <div className="App">

        <TextField onKeyPress={this.handleKeyPressed} hintText="Search" onChange={this.onSearchChanged} value={this.state.searchText} floatingLabelText="Course Search"/>
        <RaisedButton label="Search" primary={true} onClick={this.handleKeyPressed} />
        <div style={{marginLeft:0}}>
        <IconButton onClick={this.getPageModifier(-1)}>
          <LeftArrow/>
        </IconButton>
        <IconButton onClick={this.getPageModifier(1)}>
          <RightArrow/>
        </IconButton>
        </div>
        <CourseList courses={this.state.result} />

      </div>
    );
  }
}

export default App;
