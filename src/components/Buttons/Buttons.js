import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function Buttons(props) {

	function handleSubmit(event) {
			props.onClick(event, event.target.value);
	}
     
    return (
        <>
            <Button
                id={props.id}
				type={props.type}
				fullWidth={props.width}
				variant={props.variant}
				color={props.color}
				className={props.className} 
				onClick={handleSubmit} >
                {props.text}
            </Button>
        </>
    );
}

Buttons.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.bool,
    variant: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
	text: PropTypes.string
}

Buttons.defaultProps = {
    className: "",
	variant: "primary"
}

export default Buttons;