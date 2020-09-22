const INITALSTATE = {
  enable: false,
  email: "",
  password: "",
};

const loginReducer = (state = INITALSTATE, action) => {
  if (action.type === "ACTION_LOGIN") {
    return {
      ...state,
      enable: action.enable,
      email: action.values.email,
      password: action.values.password,
    };
  }
  return state;
};

export default loginReducer;
