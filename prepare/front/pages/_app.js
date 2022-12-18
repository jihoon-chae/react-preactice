// 페이지 공통되는것들을 처리(언더바 쓸것)
import React from "react";
import PropTypes from "prop-types";
import Head from 'next/head' // 넥스트에서 제공하는 head

const NodeBird = ({ Component }) => {
  return (
    <>
       {/* 모든 페이지에 공통인 메뉴 */}
      <Head>
        <meta charSet='utf-8'></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
      {/* // index.js에서 return한 값이 Component로 들어옴 */}
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
