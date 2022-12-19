import React, { useCallback, useState } from "react"; 
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput"; //커스텀 훅
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  // useInput.js 커스텀 훅 사용
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState(""); 
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  // 패스워드 체크 부분이 다르기 때문에 커스텀 훅(useInput)으로 합치지 못함

  const [term, setTerm] = useState("");

  // 약관동의
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false); // 평소에는 에러가 아닌 상태(false)
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) { // 패스워드가 일치하지 않으면
      return setPasswordError(true);
    }
    if (!term) { // 약관 동의를 체크하지 않으면 
      return setTermError(true);
    }
    console.log(id, nickname, password); // 서버로 보내는 것들 체크
  }, [password, passwordCheck, term]);
  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMessage style={{ color: "red" }}>
                비밀번호가 일치하지 않습니다.
              </ErrorMessage>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              동의 하시렵니까
            </Checkbox>
            {termError && (
              <ErrorMessage style={{ color: "red" }}>
                약관에 동의하셔야 합니다.
              </ErrorMessage>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
