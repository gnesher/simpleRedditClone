import React, { Component } from 'react';

class NewItem extends Component {

    addNew(e) {
        e.preventDefault();
        this.props.addItem(this.text.value);
    }

    render() {
        return (
            <div className="NewItem">
                <form onSubmit={(e)=>this.addNew(e)}>
                    <div>Add a new story</div>
                    <input type="text" ref={(text) => this.text = text} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default NewItem;
