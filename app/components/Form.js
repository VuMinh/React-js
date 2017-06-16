import React from 'react';

class Form extends React.Component {
    /* handleSubmit(e) {
     e.preventDefault();
     this.props.handleAdd(this.refs.txt.value);
     this.refs.txt.value = '';

     }*/

    constructor(props) {
        super(props);
        this.state = {isShowing: false}
    }

    toogle() {
        this.state.isShowing = !this.state.isShowing;
        this.setState(this.state);
    }

    hanleAdd(e) {
        e.preventDefault();
        this.props.handleSubmit(this.refs.txt.value);
        this.refs.txt.value = '';
        // this.state.isShowing = !this.state.isShowing;
        //    or
        this.toogle();
    }

    render() {
        if (this.state.isShowing)return (
            <form onSubmit={this.hanleAdd.bind(this)}>
                <input type="text" ref="txt" placeholder="enter to note"/>
                <button>Add</button>
            </form>
        );
        return <button onClick={this.toogle.bind(this)}>+</button>
    }
}
module.exports = Form;