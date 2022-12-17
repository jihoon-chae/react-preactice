// 메뉴 같은 거
import React from "react";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // 리액트에서는 화면안에 들어갈 수 있는 모든 것들이 node
};

export default AppLayout;
