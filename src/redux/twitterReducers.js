const INITIAL_STATE = {
  postId: "",
  comments: [],
};

const twitterReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "POST_ID":
      return {
        ...state,
        postId: action.payload,
      };

    case "COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};

export default twitterReducers;
