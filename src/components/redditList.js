import React, { Component } from 'react';
import RedditItem from './redditItem';
import mockData from '../data/redditData.json';
import _ from 'lodash';

class RedditList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: mockData
        };
    }

    updateVotes(key, newValue) {
        const selectedPosition = _.findIndex(this.state.listItems, {key: key});
        let newItem = {...this.state.listItems[selectedPosition], 
            votes: newValue};
        this.setState({
            listItems:  [...this.state.listItems.slice(0, selectedPosition),
                        newItem,
                        ...this.state.listItems.slice(selectedPosition + 1)]
        });
    }

    render() {
        return (
            <div className="RedditList">
                {
                    this.state.listItems.map((item) => {
                        return <RedditItem 
                            {...item}
                            updateVotes={this.updateVotes.bind(this)} />
                    })
                }
            </div>
        );
    }
}

export default RedditList;
