import { Button } from '@material-ui/core';
import React, { PureComponent } from 'react';

export default class Console extends PureComponent {
    state = {
        input: "",
    }

    changeTextArea = (text) => {
        this.setState({ input: text });
    }

    addToList = () => {
        this.props.addToList(this.state.input)
        this.setState({ input: "" });
    }

    render() {
        console.log('render Console');
        return (
            <div>
                <div>
                    <textarea
                        placeholder={"Please input your todo!"}
                        onChange={(e) => this.changeTextArea(e.target.value)}
                        className={"inputTextArea"}
                        value={this.state.input}
                    />
                </div>
                <div>
                    <Button onClick={this.addToList}>SET</Button>
                </div>
            </div>
        );
    }
};
