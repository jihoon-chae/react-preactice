// pages 공통되는것들을 처리(언더바 쓸것)-> 완전 공통

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head"; // NEXT에서 제공하는 head
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => { // index.js의 return부분이 Component로 들어감(_app.js가 index.js의 부모)
  return (
    <>
      {/* 모든 페이지에 공통인 메뉴 */}
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
      {/* // index.js에서 return한 값이 Component로 들어옴 */}
    </>
  );
};

// props 점검
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird); // configureStore.js의 Redux 적용
