import React, { useCallback, useMemo, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link'
import styled from 'styled-components';


// 리렌더링 조심! 방법1) 스타일 컴포넌트 사용
// const ButtonWrapper = styled.div`
//   margin-Top: 10px;
// `;

const FormWrapper = styled(Form)`
  padding: 10;
`;


const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.vlaue);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.vlaue);
  }, []);

  // 리렌더링 조심 ! 방법2) useMemo 사용. useMemo는 값을 캐싱, useCallback은 함수를 캐싱
  const style = useMemo(() => ({ marginTop: 10 }), []);
  const stylePadding = useMemo(() => ({ padding: 10 }), []);

  const onSubmitForm = useCallback(() => {
    console.log({
      id, password,
    });
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <Form style = {stylePadding} onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} required />
      </div>
      {/* <ButtonWrapper> */}
      <div style={style}>

        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
      {/* </ButtonWrapper> */}
    </Form>
  );
}

export default LoginForm;