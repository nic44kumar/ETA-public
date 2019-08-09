import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Textfield } from './../../components/Textfield';
import { Buttons } from './../../components/Buttons';
import classes from './Explorer.module.scss';
import { DataApi } from './../../helpers/GetDataApi';
var finalResult= [];
var Obj = {};
class Explorer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employeeName:'',
	  history:[],
      error: {
        employeeNameError: false
      }
    }
  }
  handleChange(event) {
    let error = {};
    this.setState({ [event.target.id]: event.target.value,error });
  }
 async handleSubmit(e) {
   let error = {};
   let finalResult = [];
    if(this.state.employeeName  === '') {
	  error.employeeNameError = true;
      this.setState({ error });
      return false;
    } else {
	  let directSubordinates = await this.getData(this.state.employeeName);
	  finalResult = [...directSubordinates];
	  var employee = await this.recursive(directSubordinates);
	  let saveName = localStorage.getItem("search")+","+this.state.employeeName; 
	  localStorage.setItem("search",saveName);
	  finalResult = [...new Set([...finalResult,...employee])];
	 this.props.onClick(finalResult, this.state.employeeName);
    }
  }

  async recursive(directSubordinates) {
  return new Promise (async(resolve) => {
	if(directSubordinates.length > 0) {
	   for(let i=0;i<directSubordinates.length;i++){
		Obj[directSubordinates[i]] = true
	    var result =  await this.getData(directSubordinates[i]);
		finalResult = [...finalResult, ...result];
		await this.recursive(result);
	   }
	   
	  }
	  
	  if (!Object.values(Obj).includes(true)) {
		resolve(finalResult);
	  }
  })
  
  }
   async getData(employeeName) {
   try {
	let result =  await DataApi(employeeName);
	Obj[employeeName] = false
	return result.data[1]['direct-subordinates'];
   } catch(err){
    return [];
   }
   
  }
   componentDidMount() {
   let searchHistory = localStorage.getItem("search") && localStorage.getItem("search").length>0?[...new Set(localStorage.getItem("search").split(','))]:[];
   this.setState({history:searchHistory});
  }

  render() {
    return (
      <div className={classes.login} >
        <Container component="main" maxWidth="sm" >
		 <h2>Employee Explorer</h2>
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
			<div className={classes.width45}>	
			  <Grid item lg={12}>
              <Textfield
                required={true}
                error={this.state.error.employeeNameError}
                id="employeeName"
                type="text"
                labels={"Employee Name"}
                value={this.state.employeeName}
                width={true}
                onChange={(e) => this.handleChange(e)}
                focus={true} />
				</Grid>
			</div>	
			<div className={classes.width50}>	
			<Grid item lg={4}>
              <Buttons
                id="search"
                type="button"
                width={true}
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => this.handleSubmit(e)}
                text={"Search"} />
			</Grid>
			</div>
            </form>
          </div>
		  <ul>
		  {
		  this.state.history.map((key,value)=>
		  key !== 'null'? <li>{key}</li>:null
		  ) 
		  }
		  </ul>
        </Container>
      </div>
    );
  }
}

export default Explorer;