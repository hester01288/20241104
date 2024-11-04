import React from 'react';
import '../CSS/SelfIntro.css';

const SelfIntro = () =>{
    return(
        <div className='SelfIntro'>
        <table align="center" width="50%">
          <tr>
            <td rowspan="4"><img src="/image/2.jpg" alt="center" /></td>
          </tr>
          <tr>
            <td>
              <h2>영환환</h2>
            </td>
          </tr>
          <tr>
            <td>간단하게 소개</td>
          </tr>
          <tr>
            <td>
              <p className="quickintro">
                안녕하세요!!!!저는 영환환이라고 합니다.지금은 21살이고
                가천대학교 컴퓨터공학과 학생입니다. 저는 따뜻하고 쾌활한
                성격으로 사람들을 친절하고 정직하며 겸손하게 대합니다. 근면하고
                성실하며 책임감이 강하고 고난을 견딜 수 있으며 성실하고 인내심이
                강합니다. 다른 사람들과 친화력이 있고, 접근하기 쉽고, 의사소통을
                잘합니다. 우수한 성적으로 열심히 성실하게 공부합니다. 경험을
                늘리고 능력을 향상시키기 위해 과외 문화 및 스포츠 활동, 다양한
                사회 실습 활동 및 아르바이트에 적극적으로 참여합니다. 일을 하는
                방식에 대한 경험의 작업에서 웅변과 대인 관계 기술을 연습합니다.
                저는 학교 생활에서 아르바이트를 많이 해왔습니다.
              </p>
            </td>
          </tr>
        </table>
      </div>
    )
}
export default SelfIntro;