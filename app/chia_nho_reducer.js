var redux = require('redux');

/*var defaultState = {
 mang: ['Adroid', 'IOS', 'Minhvt'],
 isAdding: false
 };*/
/* thực thi chỉ thị với mảng: thêm, xóa phần tử trong mảng*/

/*var reducer = (state = defaultState, action) => {
 switch (action.type) {
 case 'TOGGLE_IS_ADDING':
 return {...state, isAdding: !state.isAdding};
 case 'ADD_ITEM':
 return {...state, mang: [...state.mang, action.item]};

 case 'REMOVE_ITEM':
 return {...state, mang: state.mang.filter((e, i) => i !== action.index)};

 default:
 return state;
 }
 };*/

var mangReducer = (state = ['Android', 'IOS', 'Node js'],action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];

        case 'REMOVE_ITEM':
            return state.filter((e, i) => i !== action.index);

        default:
            return state;
    }
};

var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return !state;
        default:
            return state;
    }
};

/*gọi câu lệnh kết nối 2 reducer*/
var reducer = redux.combineReducers({
    /*truyền vào một đối tượng => thuộc tính nào sẽ được điều khiển bằng reducer nào*/
    mang: mangReducer,
    isAdding: isAddingReducer
});

/*
 * sử dụng redux tool để kiểm tra ta làm như sau:
 * */
// var store = redux.createStore(reducer);

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

/* sử dụng debug tool*/
store.subscribe(() => {
    var str = store.getState();
    document.getElementById('p-detail').innerHTML = JSON.stringify(str)
})
;

store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({
    type: 'ADD_ITEM',
    item: 'Stupid'
});

store.dispatch({
    type: 'REMOVE_ITEM',
    index: 1
});
