import { HYDRATE } from "next-redux-wrapper";
import user from "./user"; // reducer
import post from "./post"; // reducer
import { combineReducers } from "redux"; // reducer합쳐주는 메셔드


  // combineReducers => user reducer와 post reducer 합쳐주는 메셔드
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    // 리덕스 서버사이드 렌더링
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user, // user reducer
  post, //  post reducer
});

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

// store.dispatch(changeNickname("mighty tak"));

export default rootReducer;
