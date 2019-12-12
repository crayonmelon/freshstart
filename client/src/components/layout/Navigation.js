import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
        
export default class Navigation extends Component {

    showLikes = (e) => {
        this.props.handleShowLikes();
    }

    showAll = (e) => {
        this.props.handleShowAll();
    }


    render() {
        return (
            <Navbar fill sticky="top" >
                <ButtonGroup>
                    <Button variant="success" onClick={this.showAll} > Show All  </Button>
                    <Button variant="danger" onClick={this.showLikes} > Show Likes  </Button> 
                </ButtonGroup>
            </Navbar>
        );
    }
}

