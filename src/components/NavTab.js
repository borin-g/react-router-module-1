import React from 'react';
import { NavLink } from 'react-router-dom';

const NavTab = (props) => {
    var activeStyle = {
        color: 'green',
        fontWeight: 'bold'
    };

    var navStyle = {
        margin: 10
    };

    return (
        <NavLink to={props.to} style={navStyle} activeStyle={activeStyle}>{props.label}</NavLink>
    );
};

export default NavTab;