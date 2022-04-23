import { all, fork, take, call, put, takeEvery, takeLatest, delay } from 'redux'
import axios from  'axios';

function loginAPI(data){
    return axios.post('/api/login',data);
}


function* login(action){
    try{
        yield delay(1000);
        //const result = yield call(loginAPI, action.data)
        yield put({
            type: 'LOG_IN_SUCCESS',
            //data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}

function logoutAPI(){
    return axios.post('/api/logout');
}

function* logout(){
    try{
        yield delay(1000);
        //const result = yield call(logoutAPI)
        yield put({
            type: 'LOG_OUT_SUCCESS',
            //data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function addPostAPI(data){
    return axios.post('/api/post',data);
}

function* addPost(action){
    try{
        yield delay(1000);
        //const result = yield call(addPostAPI, action.data)
        yield put({
            type: 'ADD_POST_SUCCESS',
            //data: result.data
        });
    }catch(err){
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogin(){
    yield takeLatest('LOG_IN_REQUEST',login); // take : 로그인이라는 액션이 실행될때까지 기다리겠다.
}

function* watchLogout(){
    yield takeLatest('LOG_OUT_REQUEST',logout); //takeLatest: 몇번을 액션을 보내도 마지막꺼만 보낸다. ex 실수로 두번클릭함.
                                                            // 마지막 액션만 실행. 요청을 두번하면 응답이 두번와야하는데 응답하나를 없앰. 이게 문제임
                                                            // 이런 문제는 서버쪽에서 막으면 됨
                                                            // Throttle을 사용하면 몇초안에 한번의 요청만 가게끔 하지만 특수한 경우에만 사용한다고 함
}

function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST',addPost);
}


export default function* rootSaga(){
    yield all([ // all 은 동시에 함수를 실행해준다.
        fork(watchLogin), // call 이랑 다름 call은 동기함수호출, fork는 비동기함수호출
        fork(watchLogout),
        fork(watchAddPost),
    ]);
}