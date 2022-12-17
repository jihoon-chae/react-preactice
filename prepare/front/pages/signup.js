import React from "react"; // 안해도 되는데 리액트 할때 습관처럼
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 NodeBird</title>
      </Head>
      <AppLayout>회원가입 페이지</AppLayout>
    </>
  );
};

export default Signup;
