export const postIdActions = (id) => ({
  type: "POST_ID",
  payload: id,
});

export const commentsActions = (comments) => ({
  type: "COMMENTS",
  payload: comments,
});

export const modalTrueActions = () => ({
  type: "TOGGLE_MODAL_TRUE",
});

export const modalFalseActions = () => ({
  type: "TOGGLE_MODAL_FALSE",
});
