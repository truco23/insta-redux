const loginReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);

  if (action.type === "ACTION_LOGIN") {
    return {
      ...state,
      enable: action.enable,
    };
  }
  return [
    {
      enable: false,
    },
  ];
};

export default loginReducer;
