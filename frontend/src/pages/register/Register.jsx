import React from 'react';
import { useRef } from 'react';
import "./Register.css";

function Register() {
  const username= useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">MERN SNS</h3>
          <span className="registerDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="text"
              className="registerInput"
              placeholder="ユーザー名"
              required
            />
            <input
              type="email"
              className="registerInput"
              placeholder="Eメール"
              required
            />
            <input
              type="password"
              className="registerInput"
              placeholder="パスワード"
              required
              minLength="6"
            />
            <input
              type="password"
              className="registerInput"
              placeholder="確認用パスワード"
              required
              minLength="6"
            />
            <button className="registerButton" type="submit">サインアップ</button>
            <button className="registerRegisterButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register