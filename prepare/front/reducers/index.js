import { HYDRATE } from "next-redux-wrapper";

// 기본 State
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginDate: {},
  },

  posts: {
    mainPosts: [],
  },
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

// (이전상태, 액션) => 다음상태 (2개를 1개로 축소)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
    case "LOG_IN": // 로그인
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true, // 로그인 되면 true로 바꿔주기
          user: action.data,
        },
      };

    case "LOG_OUT": // 로그인
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false, // 로그인 되면 true로 바꿔주기
          user: null,
        },
      };
  }
};

// async action creator (비동기)
// action creator
const changeNickname = (data) => {
  // 데이터가 여러번 바뀔 수 있으니 동적으로 data로 받아오기
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

// 수정할 데이터만 함수에 넣으면 매번 action 생성할 필요가 없이 자동 생성
changeNickname("boogicho");

// {
//   type: "CHANGE_NICKNAME",
//   data: 'boogicho',
// };

store.dispatch(changeNickname("mighty tak"));

export default rootReducer;
