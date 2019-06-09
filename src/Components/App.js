import React from 'react';
import Header from './Header/Header';
import Main from './Main/MainContainer';
import LeftPillar from './LeftPillar/LeftPillarContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { configureStore } from '../Store';

const App = (props) => {
    console.log('render app');
    const store = configureStore();
    const state = store.getState();
    return (
        <div className="App">
            <Header />
            <div className={"flexContainer"}>
                <LeftPillar />
                <Main />
            </div>
            {props.isProcessing && <CircularProgress className={"circularProgress"} size={50} />}
        </div>
    );
};

export default App;
