import React, {Component} from 'react';
import {Button, Input, Row} from 'react-materialize'

class DynamicForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputComponents: []
        };

    }
    /**
     * 组建加载
     */
    componentDidMount() {
        let that = this;
        // Axios.get(`/modules/${this.props.id}`)
        //     .then(res => {
        //         console.log(res);
        //         that.setState({
        //             module: res.data
        //         })
        //     });
    }

    addInput() {
        this.state.inputComponents.push({
            type: 'default'
        })
    }



    render() {
        return (
            <Row>
                <Input placeholder="Placeholder" s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
                <Input type="password" label="password" s={12} />
                <Input type="email" label="Email" s={12} />
                <Button floating className='red float-right small' waves='light' icon='add' onClick={this.addInput} />
            </Row>
        );
    }
}

export default DynamicForm;
