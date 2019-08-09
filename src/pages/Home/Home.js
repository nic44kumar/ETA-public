import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Textfield } from './../../components/Textfield';
import { Buttons } from './../../components/Buttons';
import classes from './Home.module.scss';
import { DataApi } from './../../helpers/GetDataApi';
import { Explorer } from './../Explorer';
import { Overview } from './../Overview';
class Home extends Component {

  constructor(props) {
    super(props)
	this.state = {
	 overviewShow:false,
	 employee:'',
	 result: []
	}
  }
  handleClick(e, name) {
  this.setState({result:e,overviewShow:true,employee:name});
  }
  render() {
    return (
      <div>
	  {this.state.overviewShow === false ?
       <Explorer 
	   onClick={(e,name)=>this.handleClick(e,name)}
	   />:
	    <Overview 
		employeeName={this.state.employee}
		finalResult={this.state.result} />
	     }
      </div>
    );
  }
}

export default Home;