const INITIAL_STATE = {
  postId: "",
  comments: [],
  toggleModal: false,
  posts: [],
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

    case "TOGGLE_MODAL_TRUE":
      return {
        ...state,
        toggleModal: true,
      };

    case "TOGGLE_MODAL_FALSE":
      return {
        ...state,
        toggleModal: false,
      };

    default:
      return state;
  }
};

export default twitterReducers;
