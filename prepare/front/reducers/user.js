export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginDate: {},
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  // 로그아웃은 데이터 필요없음
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": // 로그인
      return {
        ...state,  
        isLoggedIn: true, // 로그인 되면 true로 바꿔주기
        me: action.data,
      };

    case "LOG_OUT": // 로그인
      return {
        ...state,
        isLoggedIn: false, // 로그인 되면 true로 바꿔주기
        me: null,
      };

    default:
      return state;
  }
};

export default reducer;
