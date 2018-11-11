import React, { Component } from 'react';
import RedditItem from './redditItem';
import NewItem from './newItem';
import _ from 'lodash';

class RedditList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    componentDidMount() {
        fetch('http://www.reddit.com/.json')
            .then((response) => {
                return response.json();
            })
            .then((json)=> {
                this.setState({
                    listItems: json.data.children.map(
                        (item) => {
                            return ({
                                title: item.data.title,
                                id: item.data.id,
                                votes: item.data.ups 
                            });
                        }
                    )
                })
            });
    }

    addItem(text) {

        if (_.findIndex(this.state.listItems, {id: text}) > -1) {
            console.log('duplicate item');
            return;
        };

        this.setState({
            listItems: [...this.state.listItems, {
                title: text,
                votes: 0,
                id: text
            }]
        });
    }

    updateVotes(key, newValue) {
        const selectedPosition = _.findIndex(this.state.listItems, {id: key});
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
                <NewItem addItem={this.addItem.bind(this)} />
                {
                    this.state.listItems.map((item) => {
                        return <RedditItem 
                            {...item}
                            key={item.id}
                            updateVotes={this.updateVotes.bind(this)} />
                    })
                }
            </div>
        );
    }
}



export default RedditList;
