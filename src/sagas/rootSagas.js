import { all, takeEvery } from "redux-saga/effects";

// function* addToDoSaga(action) {
//   // Talk to an API if need to
//       yield put({type: "ADD_NEW_TODO", action.payload.todo});
// }

// //Dispatches another action which gets sent to the reducer
// function* removeToDoSaga(action) {
//   // Talk to an API if need to
//       yield put({type: "REMOVE_TODO", action.payload.id});
// }

// Watches all the actions
function* watcher() {
//   yield all([takeEvery("ADD_NEW_TODO", addToDoSaga)]);
//   yield all([takeEvery("REMOVE_TODO", removeToDoSaga)]);
}

export default function*() {
//   const sagas = [watcher];

//   yield all(
//     sagas.map(saga =>
//       spawn(function*() {
//         while (true) {
//           try {
//             yield call(saga);
//             break;
//           } catch (e) {
//             console.log(e);
//           }
//         }
//       })
//     )
//   );
}
