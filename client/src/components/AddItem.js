import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


export class AddItem extends Component {
    
state = {
    title: '',
    author: ' ',
    content: ''
}


onSubmit = (e) => {
    e.preventDefault();
    this.props.AddItem(this.state.title, this.state.author, this.state.content);

    this.setState({title: '', author: '', content: ''});
}

onChange = (e) => this.setState({[e.target.name]: [e.target.value] });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail" bg="light">  
            <Form.Row>
                <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Title:</InputGroup.Text>
                    </InputGroup.Prepend>
                        <Form.Control 
                            type="String" 
                            name ="title" 
                            placeholder="title here"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </InputGroup>
                </Col>
                <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Author:</InputGroup.Text>
                    </InputGroup.Prepend>
                        <Form.Control 
                            type="text" 
                            name ="author" 
                            placeholder="title here"
                            value={this.state.author}
                            onChange={this.onChange}
                        />
                    </InputGroup>
                </Col>
            </Form.Row>
            <Form.Label><Badge variant="dark">Your Conspiracy Theory:</Badge> </Form.Label>
                <Form.Control
                    as="textarea"
                    type="text" 
                    name ="content" 
                    placeholder="Despite 13% of the population..."
                    value={this.state.content}
                    onChange={this.onChange}
                />
               
               </Form.Group>
                <Button  
                    variant="danger"
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                >Submit</Button>
            </form>
        )
    }
}

export default AddItem
