import React from 'react';
import '../CSS/Fundamentals.css';

const Fundamentals = () => {
  return (
    <div className="Fundamentals">
      <div>
        <h2>기초 자료</h2>
        <hr />
        <p className="lineinfo">
          영환환(RONG HUANHUAN), 2004년 1월 28일 안후이성에서 태어난 재한 중국인
          유학생으로 가천대학교 컴퓨터공학과 학생입니다.
        </p>
        <div>
          <table align="center" width="50%">
            <tbody>
              <tr>
                <td>성명</td>
                <td>:</td>
                <td>荣欢欢</td>
                <td>전공</td>
                <td>:</td>
                <td>컴퓨터공학과</td>
              </tr>
              <tr>
                <td>한국 이름</td>
                <td>:</td>
                <td>영환환</td>
                <td>혈액형</td>
                <td>:</td>
                <td>B형</td>
              </tr>
              <tr>
                <td>성별</td>
                <td>:</td>
                <td>여</td>
                <td>Height</td>
                <td>:</td>
                <td>163cm</td>
              </tr>
              <tr>
                <td>민족</td>
                <td>:</td>
                <td>
                  <a href="https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A1%B1">한족</a>
                </td>
                <td>직업</td>
                <td>:</td>
                <td>학생</td>
              </tr>
              <tr>
                <td>국적</td>
                <td>:</td>
                <td>
                  <a href="https://ko.wikipedia.org/wiki/%EC%A4%91%ED%99%94%EC%9D%B8%EB%AF%BC%EA%B3%B5%ED%99%94%EA%B5%AD">중국</a>
                </td>
                <td>출생처</td>
                <td>:</td>
                <td>
                  <a href="https://ko.wikipedia.org/wiki/%EC%95%88%ED%9B%84%EC%9D%B4%EC%84%B1">안후이성</a>
                </td>
              </tr>
              <tr>
                <td>생일</td>
                <td>:</td>
                <td>2004년 1월 28일</td>
                <td>별자리</td>
                <td>:</td>
                <td>
                  <a href="https://ko.wikipedia.org/wiki/%EB%AC%BC%EB%B3%91%EC%9E%90%EB%A6%AC">물병자리</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
