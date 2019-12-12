import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export class ConsItem extends Component {
    getStyle = () => {
       return{
        padding: '10px',
        margin: '10px',
        backgroundColor: this.props.item.liked ===false ?
            'backgroundColor' : ' #FFC14C'    
       }
    }
    render() {

        const {id, title, author, content} = this.props.item;
        return (
            <Card style={this.getStyle()}>
            <div>
                <h3><Badge variant="dark">{title}</Badge></h3>
                <Card.Subtitle className="mb-2 text-muted">By  {author}</Card.Subtitle>
                <p>{content}</p>
                <Button variant="danger"onClick={this.props.delItem.bind(this, id)} style = {btnStyle}>X</Button>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>

            </div>
        </Card>
        )
    }
}

ConsItem.propTypes = {
    item: PropTypes.array.isRequired
}

const btnStyle = {
    background: '#ff0000',
    
    cursor: 'pointer',
    float: 'right'
}

export default ConsItem