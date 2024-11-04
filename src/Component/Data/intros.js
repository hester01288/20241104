import Resume from "../Intro/Resume";
import SelfIntro from "../Intro/SelfIntro";
import Fundamentals from "../Intro/Fundamentals"

const intros = [
  {
    tab: "자기소개서",
    content: <SelfIntro></SelfIntro>,
    path: "/self-intro"
  },
  {
    tab: "이력서",
    content: <Resume></Resume>,
    path: "/resume"
  },

  {
    tab: "기초 자료",
    content: <Fundamentals></Fundamentals>,
    path: "/fundamentals"
  }


];

export default intros;
