import React from 'react';
import {connect} from 'react-redux';

class Note extends React.Component {
    removeNote() {
        // var {index, handleRemove} = this.props;
        // handleRemove(index);
        var {index, dispatch} = this.props;
        dispatch({
            type: 'REMOVE_ITEM',
            index: index,
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
        )
    }
}

/* vì không lấy state nên ta ko cần function state*/
/*
 module.exports =connect(function (state) {
 return{mang:state.mang};
 })(Note);*/

module.exports = connect()(Note);