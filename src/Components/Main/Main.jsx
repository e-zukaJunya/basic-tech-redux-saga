import { Button } from '@material-ui/core';
import React from 'react';
import Console from './ConsoleContainer';
import TodoList from './TodoListContainer';

const Main = (props) => {
    console.log('render Main');
    return (
        <div className={"mainBlock"}>
            <div>
                <label>count</label>
                <Button onClick={props.onPlusClick}>+</Button>
                <Button onClick={props.onMinusClick}>-</Button>
            </div>
            <div style={{ fontSize: "30px" }}>{props.count}</div>
            <TodoList />
            <Console {...props} />
        </div>
    );
};

export default Main;
