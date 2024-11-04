import "../CSS/Project.css";

const Project2 = () => {
    return (
        <div>
            <div align="center" className="project">
                <h1>파이썬으로 비행기 전쟁 작성하기</h1>
                <img src="/image/5.jpg" alt="react" width="50%" />
                <fieldset>
                    <legend>프로젝트 개요</legend>
                    <ul>
                        <li>
                            학습한 내용을 통합하고 지식에 대한 이해를 심화하기 위해 다음을
                            수행합니다.
                        </li>
                        <li>객체 지향 접근 방식을 사용하여 비행기 전쟁 디자인하기</li>
                        <li>
                            첫 번째 단계는 게임을 초기화하고 프레임워크 빌드에 있는 내용에
                            따라 게임 루프를 빌드하는 것입니다.
                        </li>
                    </ul>
                </fieldset>
            </div>
        </div>
    )
}
export default Project2;