import React from 'react';
import PropTypes from 'prop-types';
import css from './Label.module.scss';
import classNames from 'classnames';

function Label(props) {
    return (
        <label className={classNames([css.label, {[css.labelError]: props.error}])} htmlFor={props.htmlFor}>
            {props.children}
        </label>    
    );
}

Label.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    htmlFor: PropTypes.string,
	error: PropTypes.bool
}

Label.defaultProps = {
    className:'',
	error:false
}

export default Label;