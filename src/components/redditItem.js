import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RedditItem extends Component {
  
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

RedditItem.propTypes = {
  votes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updateVotes: PropTypes.func.isRequired
}

export default RedditItem;
