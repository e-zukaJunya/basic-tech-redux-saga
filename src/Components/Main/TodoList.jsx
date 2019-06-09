import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
    console.log('render TodoList');
    const listItems = props.list.map((item, idx) =>
        <li key={idx} className={"todoList"}>
            {item}
            <IconButton onClick={() => props.disposeTodo(idx)}><DeleteIcon /></IconButton>
        </li>
    );

    return (
        <div>
            <ol className={"todoListContainer"}>{listItems}</ol>
        </div>
    );
};

//バリデーション
TodoList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
