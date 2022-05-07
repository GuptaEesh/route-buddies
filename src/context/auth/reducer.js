export const initialState = {
  token: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload , token: action.payload.accessToken };

    case 'LOGOUT': 
    return {...initialState};

    default:
      return state;
  }
};
