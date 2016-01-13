import React, { Component, PropTypes } from 'react';
import { topicsPropType } from '../../prop-types';
import color from '../../utils/color';

class TopicList extends Component {
  render() {
    // Injected by connect() call:
    const { topics, onTopicClick } = this.props;
    return (
      <div>
        <h3>All Topics</h3>
        {topics.map((topic, index) => {
          const ratingColor = topic.voteCount > 0 ? color(topic.rating) : 'auto';
          const ratingText = topic.voteCount > 0 ? (topic.rating * 100).toFixed(1) + '%' : 'No Rating Yet';
          return (
            <div key={index} className="topic-wrapper" onClick={() => {
              onTopicClick(topic.id);
            }}
            >
              <h3>{topic.name}</h3>
              <div className="rating-wrapper">
                <span className="rating" style={{ backgroundColor: ratingColor }}>{ratingText}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: topicsPropType,
  onTopicClick: PropTypes.func.isRequired
};

// Wrap the component to inject dispatch and state into it
export default TopicList;
