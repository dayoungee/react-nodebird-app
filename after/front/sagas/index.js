import { all, fork, take, call, put } from 'redux'

function* watchLogin(){
    yield take('LOG_IN');
}

function* watchLoout(){
    yield take('LOG_OUT');
}

function* watchAddPost(){
    yield take('ADD_POST');
}


export default function* rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLoout),
        fork(watchAddPost),
    ]);
}