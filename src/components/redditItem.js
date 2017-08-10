import React, { Component } from 'react';

class RedditList extends Component {
  render() {
    return (
      <div className="redditItem">
        <button 
            className="up" 
            onClick={()=>{this.props.updateVotes(this.props.id, this.props.votes +1)}}
        >
        </button>
        <button
            className="down" 
            onClick={()=>{this.props.updateVotes(this.props.id, this.props.votes -1)}}
        >
        </button>
        <span className="votes">{this.props.votes}</span>
        <span className="text">{this.props.title}</span>
      </div>
    );
  }
}

export default RedditList;
