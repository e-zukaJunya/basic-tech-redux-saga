import { take, takeEvery, call, put, fork, all, delay } from 'redux-saga/effects';
import { ActionTypes } from "../Resourses/ActionTypes";
import axios from "axios";
import { reqHolidaysSuccess, reqHolidaysFailure } from '../Actions/CalcAction';

const reqHolidaysPromiss = () => {
    const url = "https://holidays-jp.github.io/api/v1/date.json"
    return axios.get(url)
        .then(res => { return { res } })
        .catch(err => { return { err } })

}

function* reqHolidays() {
    yield delay(1000);
    const { res, err } = yield call(reqHolidaysPromiss);
    if (res) {
        yield put(reqHolidaysSuccess(res.data))
    } else {
        yield put(reqHolidaysFailure(err))
    }
}

export default function* rootSaga() {
    yield takeEvery(ActionTypes.REQ_HOLIDAYS, reqHolidays);
    //yield all([
    //    reqHolidaysByTake()
    //])
}
