var redux =require('redux');
var defaultState={
  mang:['Adroid','IOS','Minhvt'],
    isAdding:false
};
/* thực thi chỉ thị với mảng: thêm, xóa phần tử trong mảng*/

var reducer =(state=defaultState,action)=>{
    switch (action.type){
        case 'TOGGLE_IS_ADDING':
            return {...state, isAdding:!state.isAdding};
            /* Thêm phần tử vào mảng*/
            /* muốn thêm phần tử vào mảng:
            * đầu tiên copy mảng ban đầu
            * phần tử cuối cùng trong mảng bằng : action.item
            * */
        case 'ADD_ITEM':
           return {...state, mang:[...state.mang, action.item]};

           /*Xóa phần tử trong mảng:
           * dùng câu lệnh filter()
           * i!=action.index nghĩa là: nếu i nào khác action.index nghĩa là phần tử nào có index
           * không phải là index mà ta muốn xóa nghĩa là trả về true=> không bị xóa
           * */
        case 'REMOVE_ITEM':
            return {...state, mang:state.mang.filter((e,i)=>i!==action.index)};

        default:
            return state;
    }
};

var store=redux.createStore(reducer);
/*Cách theo dõi sự thay đổi của state:
* Subscribe và dubug toll
* mỗi lần store thay đổi thì làm gì
* thay vì sau mỗi lần thay đổi ta log ra thì ta sẽ dùng
 * store.subscribe(()=>console.log(store.getState()));
* */

// store.subscribe(()=>console.log('changed'));
store.subscribe(()=>console.log(store.getState()));

/*store.dispatch({type:'TOGGLE_IS_ADDING'});
store.dispatch({
   type:'ADD_ITEM',
    item: 'Stupid'
});
store.dispatch({
   type:'REMOVE_ITEM',
    index:1
});*/
module.exports = store;
