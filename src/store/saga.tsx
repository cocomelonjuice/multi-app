//import reduxSaga from "redux-saga";
import {call, put,takeEvery} from "redux-saga/effects";
import { GET_INFO_FAILURE } from "./action";
import { getInfoRequest, getInfoSuccess } from "./reducer";

// Function to fetch data
const infoFetch = async () => {
    const responseFromUrl = await fetch('https://6732c7cf2a1b1a4ae110e228.mockapi.io/info').then(res => res);
    const result = await responseFromUrl.json();
    return result;
}

// Function to call fetch data function, after complete then do action 
function *workGetInfoFetch(): any{
    try{
        const info = yield call(infoFetch);
        yield put(getInfoSuccess(info));
        //console.log(yield put(getInfoSuccess(info)) + "info is"    + typeof(yield put(getInfoSuccess(info))));
    }catch(e: any){
        yield put({type: GET_INFO_FAILURE, message: e.message});
    } 
}

// Function to listen to when there is fetch request, then call Generator function "workGetInfoFetch()"    
function *displayInfoSaga () {
    yield takeEvery(getInfoRequest, workGetInfoFetch);
}
export default displayInfoSaga; 