import { ActionTypes } from "./Resourses/ActionTypes";
import * as redux from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './Sagas/sagas';

export const initialState = {
    count: 0,
    list: [],
    holidayList: [],
    isProcessing: false,
}

// Reducer
const calculator = (state = initialState, action) => {
    //console.log('boot reducer');
    switch (action.type) {
        case ActionTypes.PLUS:
            return {
                ...state,
                count: state.count + 1,
            }

        case ActionTypes.MINUS:
            return {
                ...state,
                count: state.count - 1,
            }

        case ActionTypes.REQ_HOLIDAYS:
            return {
                ...state,
                isProcessing: true,
            }

        case ActionTypes.REQ_HOLIDAYS_SUCCESS:
            const holidayList = Object.values(action.data);
            return {
                ...state,
                isProcessing: false,
                holidayList,
            }

        case ActionTypes.REQ_HOLIDAYS_FAILURE:
            return {
                ...state,
                isProcessing: false,
            }

        case ActionTypes.DISPOSE_TODO:
            const list = state.list.filter((item, idx) => idx !== action.id);
            return {
                ...state,
                list,
            }

        case ActionTypes.DISPOSE_ALL_TODOS:
            return {
                ...state,
                list: [],
            }

        case ActionTypes.ADD_TO_LIST: {
            let list = state.list;
            if (action.input !== "") {
                list = state.list.concat(action.input);
            }
            return {
                ...state,
                list,
                //‚±‚ê‚Å‚à‚¢‚¢
                //list: state.list.concat(action.input),
            }
        }
        default:
            console.log('default action')
            return {
                ...state
            }
    }
};

const RootReducer = redux.combineReducers({ calculator });

const logger = createLogger({
    diff: true,
    collapsed: true,
})

export const configureStore = (initialState) => {
    console.log('configureStore was mounted')
    const sagaMiddleware = createSagaMiddleware();
    console.log('first middle of configureStore was mounted')
    const store = redux.createStore(
        RootReducer,
        initialState,
        redux.applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    console.log('middle of configureStore was mounted')
    sagaMiddleware.run(rootSaga);
    console.log('end of configureStore was mounted')
    return store;
};
