import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './../Label';
import TextField from '@material-ui/core/TextField';

function Textfield(props) {

	function handleChange(event) {
			props.onChange(event, event.target.value);
	}
	
    return (
        <>
            {props.label ? 
            <Label htmlFor={props.id}>{props.label}</Label>
            : null}
             <TextField
               required ={props.required}
               error={props.error}
               id={props.id}
               label={props.labels}
               className={props.className}
               value= {props.value}
			   type= {props.type}
               fullWidth ={props.width}
               onChange={handleChange}
               autoFocus={props.focus}
			   disabled={props.disabled}
               margin="normal" />
        </>
    );
}

Textfield.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    labels: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    className: PropTypes.string,
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
	required: PropTypes.bool,
	width: PropTypes.bool,
	focus: PropTypes.bool,
	error: PropTypes.bool,
	disabled: PropTypes.bool
}

Textfield.defaultProps = {
    className: '',
    disabled: false,
    autoFocus: false,
    type: 'text',
    value: '',
	error: false
}

export default Textfield;