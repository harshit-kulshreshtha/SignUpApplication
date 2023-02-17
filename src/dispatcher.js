export const addUserName = (dispatch) => (userName) =>
  dispatch({
    type: "ADD_USERNAME",
    userName,
  });

export const addEmailId = (dispatch) => (emailId) => {
  dispatch({
    type: "ADD_EMAIL_ID",
    emailId,
  });
};
