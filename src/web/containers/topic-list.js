import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { topicsPropType } from '../../prop-types';
// components
import TopicList from '../components/topic-list';

class TopicListContainer extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div>
        <Link to={'/add'}>Add Topic</Link>
        <TopicList
          topics={topics}
          onTopicClick={(id) => {
            this.context.router.push('topics/' + id);
          }}
        />
      </div>
    );
  }
}

TopicListContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

TopicListContainer.propTypes = {
  topics: topicsPropType
};

function selectTopics(topics) {
  localStorage.setItem('topics', JSON.stringify(topics));
  return topics;
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    topics: selectTopics(state.topics)
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(TopicListContainer);
