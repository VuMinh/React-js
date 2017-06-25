var redux = require('redux');
var defaultState = {
    mang: ['Androi', 'IOS', 'Node js'],
    isAdding: false
};
var reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return {...state, isAdding: !state.isAdding};
        default:
            return state;
    }
};
var store = redux.createStore(reducer);
console.log(store.getState());
/* để thực thi chỉ thị ta dùng dispatch()*/
store.dispatch({type:'TOGGLE_IS_ADDING'});
console.log(store.getState());