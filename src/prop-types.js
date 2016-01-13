import { PropTypes } from 'react';

export const topicsPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
}).isRequired).isRequired;
