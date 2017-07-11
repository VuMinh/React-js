var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.js');
var {Provider} = require('react-redux');
// require('./chia_nho_reducer.js');
// var store=require('./chia_nho_reducer.js');
// systax mới trong ES6 => detructering

var store = require('./dispatch.js');

// var Provider = require('react-redux').Provider;

/* nếu tên biến bằng tên thuộc tính=> ta có thể sd viết ngắn gọn = {Provider}*/

ReactDOM.render(
    //thuộc tính store của Provider chính = store mà ta tạo ra bên kia
    <Provider store={store}>
        <List/>
    </Provider>,
    document.getElementById('root')
);

// require('./redux_example.js');
// require('./dispatch.js');
// require('./subscribe_debugtool.js');

// require('./chia_nho_reducer.js');

/*
 * Toán tử dấu ...
 * pure function
 * */

/*
 var obj = {
 name: "minhvt",
 age: 23
 };


 /!*pure function*!/
 var add = (a, b) => a + b;

 var obj2 = {...obj};

 obj.age = 18;
 console.log(obj2);
 console.log(add(5,10));*/
