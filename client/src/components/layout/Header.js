import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';



function Header() {
    return (
        <Jumbotron style={jumboStyle}>
            <h1><Badge variant="warning">Conspiracy Theories</Badge></h1>
            <Link style={linkStyle} to="/">HOME</Link> | <Link style={linkStyle} to ="/about">ABOUT</Link>

        </Jumbotron>
    )
}

const linkStyle = {
    color: '#fff',
    background: '#000000'

}
const jumboStyle = {
    opacity: 0.8
}

export default Header;