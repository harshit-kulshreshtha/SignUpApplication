export const myreducer = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return {
        ...state,
        userName: action.userName,
      };
    case "ADD_EMAIL_ID":
      return {
        ...state,
        emailId: action.emailId,
      };

    default:
      return {
        state,
      };
  }
};

export const initialState = {
  userName: "",
  emailId: "",
};
