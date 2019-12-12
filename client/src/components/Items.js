import React, { Component } from 'react';
import ConsItem from './ConsItem';
import PropTypes from 'prop-types';

class Items extends Component{

  
        state = {
            items:[]
        }
    

    componentDidMount(){
        fetch('/api/items')
        .then(res => res.json())
        .then(items => this.setState({items}, () => console.log('items are fetched..', items)))
    }

    render(){
        return this.state.items.map((item) => (
            <ConsItem key={item.id} item={item} 
            markComplete={this.props.markComplete}
            delItem={this.props.delItem}/>
        ));
    }  
}
Items.propTypes = {
    items: PropTypes.array.isRequired
}

export default Items;
