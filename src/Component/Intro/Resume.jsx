import React from 'react';
import '../CSS/Resume.css';

const Resume = () => {
  return (
    <div className="Resume" >
      <h2 style={{ textAlign: 'center' }}>이력서</h2>
      <hr />
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td rowSpan="2">
              <img src="/image/3.jpeg" alt="Profile" />
            </td>
            <td colSpan="4">
              <h1>영환환</h1>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <h2>구직 목표: 소프트웨어 개발 엔지니어</h2>
            </td>
          </tr>
          <tr>
            <td rowSpan="13"></td>
            <td colSpan="4">
              <h2>학력사항</h2>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="Border_resume_line"></div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
                <span>2022.09 ~ 2026.06</span> <span>가천대학교</span> <span>컴퓨터공학과</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
                <p>
                  주요 과정: C++, 자바, 데이터 구조, 데이터베이스 입문, 데이터베이스 애플리케이션, 디지털 로직, 조립 언어, EDA 기술, 운영 체제, 컴퓨터 네트워크, Linux 운영 체제, 컴퓨터 그래픽, 컴파일 원리.
                </p>
                <p>GPA: 3.7 / 4.5</p>
                <p>학교 장학금</p>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <h2>개인능력 및 장단점</h2>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="Border_resume_line"></div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
                <h5>자격증</h5>
                <ul>
                  <li><h5>Microsoft Technology Associate Introduction to programming using Java</h5></li>
                  <li><h5>Microsoft Technology Associate Database Administration Fundamentals</h5></li>
                  <li><h5>Microsoft Technology Associate HTML5 Application Development Fundamentals</h5></li>
                </ul>
                <h5>취미</h5>
                <ul>
                  <li><h5>영화</h5></li>
                  <li><h5>독서</h5></li>
                  <li><h5>배드민턴 치기</h5></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <h2>자기 평가</h2>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="Border_resume_line"></div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
                <p>
                  새로운 기술을 탐구하고 의사소통 능력이 뛰어나며 팀에 빠르게 적응할 수 있습니다. 사람들과 잘 어울리고 친화력이 좋습니다. 나는 관련성이 있고, 현장 르 엔데버, 긍정적이고 열정적이며 낙관적이며 어느 정도의 조직과 혁신 정신, 강한 팀워크 감각을 가지고 있으며 완벽 주의자이며 사려 깊고 신중하며 신중하고 체계적이며 고유 한 통찰력을 가지고 있으며 능력 범위 내에서 독립적으로 작업을 완료 할 수 있습니다.
                </p>
                <p>
                  일을 꾸준히 하고, 일을 진지하게 대하며, 책임감이 강하고, 사람들을 진심으로 대하고, 의사소통에 능숙하며, 항상 배우고, 변화를 적극적으로 수용합니다. 내가 좋아하는 것 저는 특정 소프트웨어 분석, 설계, 개발 및 응용 프로그램 기능을 갖춘 프런트 엔드 개발을 좋아하며, 학습 능력과 팀 정신이 강하고 다음을 수행할 수 있습니다. 업무 환경에 빠르게 적응할 수 있습니다.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Resume;
