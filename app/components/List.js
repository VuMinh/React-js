import React from 'react';
import Note from './Note.js';
import Form from  './Form.js';
import {connect} from 'react-redux';

class List extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            mang: ['Android', 'Node js', 'IOS']
        }
    }*/

    remove(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }
    addNote(text){
        this.state.mang.push(text);
        this.setState(this.state);
    }


    render() {
        return (
            <div>
                <Form handleSubmit={this.addNote.bind(this)} />
                {/*remove từng phần tử theo id*/}
                {/* thay thế state bằng props*/}
                {this.props.mang.map((e, i) => <Note key={i} index={i}
                                                     handleRemove={this.remove.bind(this)}>{e}</Note>)}

                {/*{this.state.mang.map((e, i) => <Note key={i} index={i}*/}
                                                     {/*handleRemove={this.remove.bind(this)}>{e}</Note>)}*/}
            </div>
        )
    }
}
// module.exports = List;

// function return ra một function
module.exports = connect(function(state){
    // return ra đối tượng sẽ trở thành props của List
    return {mang:state.mang}
})(List);