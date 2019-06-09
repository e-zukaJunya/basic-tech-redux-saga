import { Button } from '@material-ui/core';
import React from 'react';
import AlertDialog from '../Shared/AlertDialog';

const LeftPillar = (props) => {
    console.log('render LeftPillar');
    return (
        <div className={"leftPillar"}>
            <Button onClick={props.reqHolidays} >reqHolidays</Button>
            <AlertDialog onClickYes={props.disposeAllTodos} />
        </div>
    );
};

export default LeftPillar;
