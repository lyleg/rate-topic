import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addTopic } from '../../actions';

class AddTopicContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.dispatch = this.context.store.dispatch;
  }
  createTopic(e) {
    e.preventDefault();
    e.stopPropagation();
    const name = ReactDOM.findDOMNode(this.refs.name).value;
    const description = ReactDOM.findDOMNode(this.refs.description).value;
    if (name && description) {
      this.dispatch(addTopic(name, description));
      this.context.router.push('/');
    } else {
      this.setState({
        error: 'Enter both name and description'
      });
    }
  }
  render() {
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <h3>Add Topic</h3>
        <form className="add-topic">
          <label>Name</label>
          <input type="text" ref="name"/>
          <label>Description</label>
          <textarea ref="description"></textarea>
          <button onClick={(e) => {
            this.createTopic(e);
          }}
          >
            Create Topic
          </button>
        </form>
      </div>
    );
  }
}

AddTopicContainer.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function selectTopics(topics) {
  localStorage.setItem('topics', JSON.stringify(topics));
  return topics;
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    topics: selectTopics(state.topics),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AddTopicContainer);
