import { Link,useNavigate} from "react-router-dom";
import React, { useState } from "react";
import "../Component/CSS/Login.css";

const Login = (props) => {
    const [id, setId] = useState("root"); 
    const [pwd, setPwd] = useState("root"); 
    const changeId = (event) => setId(event.target.value);
    const changePwd = (event) => setPwd(event.target.value);
    const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    setIsLoggedIn(true); 
    alert(`로그인 성공! 환영합니다, ${id}님!`); 
    navigate('/');
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="login-success">
          <h2>로그인 성공!</h2>
          <p>환영합니다, {id}님!</p>
        </div>
      ) : (
        <div>
          <div className="loginarea">
            <div className="login">로그인</div>
          </div>

          <div id="loginForm">
            <form name="frm" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">ID</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={id}
                  onChange={(e) => changeId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={pwd}
                  onChange={(e) => changePwd(e.target.value)}
                  required
                />
              </div>
              <br />
              <button type="submit" className="login">LOGIN</button>
              <Link to="/Register">
                <button type="button" className="login">Register</button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
