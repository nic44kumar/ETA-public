import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Textfield } from './../../components/Textfield';
import { Buttons } from './../../components/Buttons';
import classes from './Overview.module.scss';
import { DataApi } from './../../helpers/GetDataApi';

class Overview extends Component {

  constructor(props) {
    super(props)
     
  }
  
  render() {
    return (
      <div className={classes.login} >
        <Container component="main" maxWidth="sm" >
          <div className={classes.paper}>
            <h2>Employee Overview</h2>
			<h6>Subordinates of employee {this.props.employeeName}:</h6>
            <ul>
			{this.props.finalResult.map((key,value)=>
			  <li>{key}</li>
			  ) 
		    }
			</ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default Overview;