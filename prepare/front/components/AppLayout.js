// 공통 컴포넌트 ex) 공통메뉴
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link"; // Link 컴포넌트
import { Menu, Input, Row, Col } from "antd"; // ant 디자인 컴포넌트 가져오기
import styled from "styled-components";
import { useSelector } from "react-redux";
import UserProfile from "../components/UserProfile";
import LogginForm from "../components/Loginform";

const SearchInput = styled(Input.Search)`
  // ant디자인 커스텀
  vertical-align: middle;
`;

// 일부만 공통인 애들
const AppLayout = ({ children }) => {
  // isLoggedIn의 상태가 바뀌면 자동으로 AppLayout이 리렌더링
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>노드버드</a>
            </Link>{" "}
          </Menu.Item>
          {/* Link 안에 a태그 */}
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>{" "}
            {/* Link 안에 a태그 */}
          </Menu.Item>
          <Menu.Item>
            <SearchInput enterButton />
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn ? <UserProfile /> : <LogginForm />}
          </Col>
          {/* 모바일일때 24칸 중에 24칸, 데스크탑에서는 6칸만 차지한다 */}
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a
              href="https://www.naver.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              네이버
            </a>
            {/* 새창에서 쓸 때는 noreferrer noopener를 써서 보안 강화하기  */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // 리액트에서는 화면안에 들어갈 수 있는 모든 것들이 node
};

export default AppLayout;
