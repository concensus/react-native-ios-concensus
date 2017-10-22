const initialState = {
  id: null,
  subject: '',
  description: '',
  expiryInMinutes: 60,
  discussionExpiryInMinutes: 5,
  createdAt: null,
};

export default function(state = initialState, action) {
  if (action.type === 'CREATE_POLL') {
    return {
      ...state,
      ...action.poll,
      createdAt: Date.now(),
    };
  }
  return state;
}