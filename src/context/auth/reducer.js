export const initialState = {
  token: null,
  loading: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload, token: action.payload.accessToken };

    case "LOGOUT":
      return { ...initialState };

    case "LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
