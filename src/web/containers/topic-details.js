import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { voteTopic } from '../../actions';
import color from '../../utils/color';
import _ from 'lodash';

class TopicDetailsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.dispatch = this.context.store.dispatch;
  }
  voteTopic(e, rating) {
    e.preventDefault();
    this.dispatch(voteTopic(Number(this.props.params.id), rating));
  }
  renderRating() {
    const topic = this.props.topic;
    const ratingBoxColor = topic.voteCount > 0 ? color(topic.rating) : '#E6E6E6';
    const ratingBoxText = topic.voteCount > 0 ? (topic.rating * 100).toFixed(2) + '%' : 'No Votes Yet';
    return (
      <div>
        <label>Rating</label>
        <div className="rating-box" style={{ backgroundColor: ratingBoxColor }}>
          {ratingBoxText}
        </div>
      </div>
    );
  }
  render() {
    const topic = this.props.topic;
    return (
      <div className="topic-details">
        <Link to={'/'}>Back</Link>
        <h3>Topic Details</h3>
        <label>Name</label>
        <div className="description">
          {topic.name}
        </div>
        <label>Name</label>
        <div className="description">
          {topic.description}
        </div>
        {this.renderRating()}
        <a href="#" onClick={(e) => {
          this.voteTopic(e, 1);
        }}
        >Vote Up</a>|
        <a href="#" onClick={(e) => {
          this.voteTopic(e, 0);
        }}
        >Vote Down</a>
      </div>
    );
  }
}

TopicDetailsContainer.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
TopicDetailsContainer.propTypes = {
  topic: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};
function selectTopics(topics, props) {
  localStorage.setItem('topics', JSON.stringify(topics));
  const topic = _.find(topics, { id: Number(props.params.id) });
  return topic;
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state, props) {
  return {
    topic: selectTopics(state.topics, props),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(TopicDetailsContainer);
