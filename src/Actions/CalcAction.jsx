import { ActionTypes } from "../Resourses/ActionTypes"

export const onPlusClick = () => ({
    type: ActionTypes.PLUS,
});

export const onMinusClick = () => ({
    type: ActionTypes.MINUS,
});

export const reqHolidays = () => ({
    type: ActionTypes.REQ_HOLIDAYS,
});

export const reqHolidaysSuccess = (data) => ({
    type: ActionTypes.REQ_HOLIDAYS_SUCCESS,
    data: data,
});

export const reqHolidaysFailure = (data) => ({
    type: ActionTypes.REQ_HOLIDAYS_FAILURE,
    data: data,
});

export const addToList = (input) => ({
    type: ActionTypes.ADD_TO_LIST,
    input: input,
});

export const disposeTodo = (id) => ({
    type: ActionTypes.DISPOSE_TODO,
    id: id,
});

export const disposeAllTodos = () => ({
    type: ActionTypes.DISPOSE_ALL_TODOS,
});
