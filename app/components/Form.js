import React from 'react';
import {connect} from 'react-redux';
class Form extends React.Component {
    /* handleSubmit(e) {
     e.preventDefault();
     this.props.handleAdd(this.refs.txt.value);
     this.refs.txt.value = '';

     }*/

    /*constructor(props) {
        super(props);
        this.state = {isShowing: false}
    }*/
    handleSubmit(e) {
        e.preventDefault();
        /*this.props.handleSubmit(this.refs.txt.value);
         this.refs.txt.value = '';
         this.toogle();*/
        var {dispatch}=this.props;
        dispatch({
            type:'ADD_ITEM',
            item:this.refs.txt.value,
        });
        dispatch({type:'TOGGLE_IS_ADDING'});

    }
    toogle() {
        // this.state.isShowing = !this.state.isShowing;
        // this.setState(this.state);
        // var dispatch = this.props.dispatch;
    //    nếu tên biến bằng tên thuộc tính thì ta có thể viết lại như sau:
        var {dispatch}=this.props;
        dispatch({
            type:'TOGGLE_IS_ADDING',
        })
    }
    render() {
        if (this.props.isAdding)return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="txt" placeholder="enter to note"/>
                <button>Add</button>
            </form>
        );
        return <button onClick={this.toogle.bind(this)}>+</button>
    }
}
module.exports = connect(function (state) {
    return {isAdding: state.isAdding};
})(Form);