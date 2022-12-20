export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        // 관계형 데이터는 대문자
        id: 1,
        nickname: "제로초",
      },
      content: "첫번째 게시글 #해시 태그 #익스프레스",
      Images: [
        // 관계형 데이터는 대문자
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        // 관계형 데이터는 대문자

        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [], // 이미지 업로드할때 경로 저장됨
  postAdded: false, // 게시글 추가가 완료되면 true로 변경
};

const ADD_POST = "ADD_POST"; // 액션 이름을 상수로 빼기 (오타 없앨 수 있음)

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 앞에 추가해서 게시글이 위에 올라가도록
        postAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
