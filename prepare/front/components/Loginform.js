import React, { useCallback, useState, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components"; //styled-components로 리렌더링 최소화

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const Loginform = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChangeId = useCallback((e) => {
    // props로 전달할때는 꼭 useCallback 사용하자 (최적화를 위해서)
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    // props로 전달할때는 꼭 useCallback 사용하자 (최적화를 위해서)
    setPassword(e.target.value);
  }, []);

  const style = useMemo(() => ({ marginTop: 10 }), []); // 리렌더링돼도 같은 객체 유지(리렌더링 최적화)

  const onSubmitForm = useCallback(() => {
    // antd에서는 onFinish로 자동으로 e.preventDefault가 적용됨
    console.log(id, password);
    setIsLoggedIn(true); // 로그인 되면 true로 바뀜
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm} >
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
export default Loginform;
