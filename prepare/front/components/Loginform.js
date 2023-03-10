import React, { useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components"; //styled-components로 리렌더링 최소화
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import useInput from "../hooks/useInput";
import { loginAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const Loginform = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput(""); // 커스텀 훅 가져와서 쓰기
  const [password, onChangePassword] = useInput("");
  const style = useMemo(() => ({ marginTop: 10 }), []); // 리렌더링돼도 같은 객체 유지(리렌더링 최적화)

  const onSubmitForm = useCallback(() => {
    // antd에서는 onFinish로 자동으로 e.preventDefault가 적용됨
    console.log(id, password);
    dispatch(loginAction())
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      {/* onFinish는 자동으로 e.preventDefault가 적용 됨  */}
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
          {/* href는 Link에만 넣고 a태그에는 넣지않기  */}
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

Loginform.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Loginform;
