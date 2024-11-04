import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import Index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Experiences from "./Component/Experiences"
import ScrollToTopButton from "./Component/ScrollToTopButton";
import Login from "./Component/Login";
import Register from "./Component/Register"
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <div id="index">
    <div className="App">
      <header>
        <div align="center" className="h1-wrapper">
          <h1>영환환의 자기소개</h1>
        </div>
      </header>
      <div className="container">
        <nav>
          <table width="960">
            <tbody>
              <tr>
                <td>
                  <Link to="/">홈패이지</Link>
                </td>
                <td>
                  <Link to="/SelfIntro">자기소개서</Link>
                </td>
                <td>
                  <Link to="/Project">프로젝트</Link>
                </td>
                <td>
                  <Link to="/Experiences">나의 경력</Link>
                </td>
                <td>
                  <Link to="/Login">로그인/회원가입</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>

      <div id="main">
        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/SelfIntro" element={<Introduction />} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Experiences" element={<Experiences/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register />} />

        </Routes>
       

        <ScrollToTopButton />
      </div>
    </div>
    <footer>
        <div>
          <div>
            <h2>About Me</h2>
          </div>
          <ul>
            <li><span>Full Name: RONG HUANHUAN</span></li>
            <li><span>Phone: 010-6861-9063</span></li>
            <li><span>Email: hester01288@163.com</span></li>
            <li>
              <span>Address: 11342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do</span>
            </li>
          </ul>
          <div className="copyright">
            <p>2024 RONG HUANHUAN All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
