import React from "react"; // 안해도 되는데 리액트 할때 습관처럼

import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 NodeBird</title>
      </Head>
      <AppLayout>내 프로필</AppLayout>
    </>
  );
};

export default Profile;
