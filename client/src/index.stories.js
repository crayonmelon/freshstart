import React from 'react';
import App from "./App.js";
import AddItem from "./components/AddItem";
import ConsItem from "./components/ConsItem.js";
import Items from "./components/Items.js";
import { storiesOf } from '@storybook/react';
import About from './components/pages/About.js';

storiesOf("App",module).add("default", () => (
    <App/>
));

storiesOf("App",module).add("AddItem", () => (
    <AddItem/>
   
));

storiesOf("App",module).add("Items", () => (
    <React.Fragment>
    <AddItem AddItem={this.AddItem}/>
    <Items items={this.state.items} 
    markComplete={this.markComplete} 
    delItem ={this.delItem} />
    </React.Fragment> 
));

storiesOf("App",module).add("About", () => (
    <About/>
));


