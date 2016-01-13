// action types
export const ADD_TOPIC = 'ADD_TOPIC';
export const VOTE_TOPIC = 'VOTE_TOPIC';

export function addTopic(name, description) {
  return {
    type: ADD_TOPIC,
    name,
    description
  };
}
export function voteTopic(id, rating) {
  return {
    type: VOTE_TOPIC,
    id,
    rating
  };
}
