export const initialState = {
  token: localStorage.getItem("token") ?? null,
  // user: localStorage.getItem("token"),
  loading: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        token: action.payload.accessToken,
      };

    case "USER_DATA":
      return {
        ...state,
        data: action.payload,
      };

    case "LOGOUT": {
      localStorage.clear();
      return { ...initialState };
    }

    case "LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
