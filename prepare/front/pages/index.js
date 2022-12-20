import React from "react"; // 안해도 되는데 리액트 할때 습관처럼
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

import AppLayout from "../components/AppLayout";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {/* // 게시글은 로그인 한 사람만 볼 수 있다  */}
      {isLoggedIn && <PostForm />}
      {/* 지워질 가능성이 있는 반복문은 key에 index를 쓰면 안된다  */}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout> // 감싸진 것들이 children이 됨
  );
};

export default Home;
