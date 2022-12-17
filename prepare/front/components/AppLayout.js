// 메뉴 같은 거
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link"; // Link 컴포넌트

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
      <Link href="/"><a>노드버드</a></Link>  {/* Link 안에 a태그 */}
      <Link href="/profile"><a>프로필</a></Link>  {/* Link 안에 a태그 */}
      <Link href="/signup"><a>회원가입</a></Link> 
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // 리액트에서는 화면안에 들어갈 수 있는 모든 것들이 node
};

export default AppLayout;
