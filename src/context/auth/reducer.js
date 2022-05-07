export const initialState = {
  token: localStorage.getItem("token"),
};

export const authReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
