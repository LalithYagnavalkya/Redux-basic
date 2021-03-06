import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
const store = configureStore();

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugResolved(1));

store.dispatch(removeBug(0));

console.log(store.getState());
