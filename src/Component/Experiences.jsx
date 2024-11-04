import "../Component/CSS/Experiences.css"
const Experiences = () => {
  return (
    <div id="ex_grid">
      <ol>
        <li><a href="#Part_time_jobs">아르바이트 경력</a></li>
        <li><a href="#Community_service">사회 봉사</a></li>
        <li><a href="#Certifications">자격증 및 그외 스펙</a></li>
      </ol>

      <div>
        <div align="center">
          <table border="0" width="50%" className="ex">
            <thead>
              <tr>
                <td>
                  <h2>나의 경력</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="Part_time_jobs">아르바이트 경력</td>
              </tr>
              <tr>
                <td>
                  <div className="Border_resume_line"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      <div>
                        <span>2019.12~2020.2</span>
                        <span>상하이 신발가게 방학알바</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>2022.06~2022.08</span>
                        <span>G 마트 방학알바</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>2023.06~2023.08</span>
                        <span>상하이 당구장 방학알바</span>
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td id="Community_service">사회 봉사</td>
              </tr>
              <tr>
                <td>
                  <div className="Border_resume_line"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      <div>
                        <span>2019.07~2019.08</span>
                        <span>상하이 푸단대학 부속 아동병원에서 봉사</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>
                          중학교 3학년 여름방학 때 학교에서 자원봉사를 조직하였고
                          여름방학의 여가를 이용하여 상하이 푸단대학 부속
                          아동병원에서 자원 봉사 활동을 하였다. 응급상황에서
                          어르신들의 신고서 수령 및 기계접수와 요금수납을 도와
                          자원봉사자들이 전달한 것을 느낄 수 있었다. 사랑이고, 공익에
                          대한 박애이며, 봉사의 즐거움을 느꼈다.
                        </p>
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td id="Certifications">자격증 및 그외 스펙</td>
              </tr>
              <tr>
                <td>
                  <div className="Border_resume_line"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      <div>한국어 능력 시험 4급</div>
                    </li>
                    <li><img src="/image/topik.jpg" alt="topik" /></li>
                    <li>
                      <div>Microsoft Technology Associate Introduction to programming using java</div>
                    </li>
                    <li><img src="/image/Introduction_to_Programming_using_Java.jpg" alt="Java certification" /></li>
                    <li>
                      <div>Microsoft Technology Associate Database Administration Fundamentals</div>
                    </li>
                    <li><img src="/image/Database_Administration_Fundamentals.jpg" alt="Database certification" /></li>
                    <li>
                      <div>Microsoft Technology Associate HTML5 Application Development Fundamentals</div>
                    </li>
                    <li><img src="/image/HTML5_Application_Development_Fundamentals.jpg" alt="HTML5 certification" /></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
