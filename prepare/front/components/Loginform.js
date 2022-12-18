import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";

const Loginform = () => {
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

  return (
    <Form>
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
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
          {/* href는 Link에만 넣고 a태그에는 넣지않기  */}
        </Link>
      </div>
    </Form>
  );
};
export default Loginform;
