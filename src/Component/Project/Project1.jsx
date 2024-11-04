import "../CSS/Project.css";

const Project1 =()=>{
    return(
        <div>
        <div align="center" className="project">
          <h1>학교 홍보 동영상</h1>
          <a href="https://youtu.be/dTRbLGi-NX8">
            <img src="/image/4.jpg" alt="react"/>
          </a>
          <fieldset>
            <legend>프로젝트 개요</legend>
            <ul>
              <li>가천대학교 또는 본인의 학과 홍보 영상</li>
              <li>
                소개: 동영상은 학교의 인성, 학업 성취도, 독특한 분위기를 보여줄 수
                있는 중요한 도구가 될 것입니다.
              </li>
              <li>
                목표: 학교의 핵심 가치, 교수 및 학습의 질, 캠퍼스 시설 및 학생
                생활에 대해 청중에게 전달합니다
              </li>
              <li>
                동영상 콘텐츠: 캠퍼스 환경, 교수진의 수준, 학업 성취도, 학생 생활
                등을 소개합니다.
              </li>
              <li>
                프로세스 일정: 기획 및 준비 단계, 촬영 단계, 포스트 프로덕션
                단계입니다.
              </li>
              <li>
                결론: 홍보 동영상은 다양한 시각적 및 정보 제공 수단을 통해 학교에
                대한 긍정적인 이미지를 만들고 학부모와 학생의 관심과 흥미를
                유도하는 데 도움이 됩니다.
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
    )
}
export default Project1;