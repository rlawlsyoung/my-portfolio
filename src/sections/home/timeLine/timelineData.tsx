import { GiGraduateCap, GiBriefcase } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import soldier from "../../../assets/soldier.png";

export interface timelineDataType {
  icon: JSX.Element | string;
  title: string;
  period: string;
  introduce: string;
}

export const timelineData: timelineDataType[] = [
  {
    icon: <GiBriefcase className="icon" />,
    title: "Pre-Onboarding 코스 수료",
    period: "2022.09 ~ 2022.10",
    introduce: "Wanted에서 진행하는 개발자 인턴십 체험 프로젝트",
  },
  {
    icon: <AiFillCode className="icon" />,
    title: "JUSTCODE 부트캠프 6기 수료",
    period: "2022.07 ~ 2022.10",
    introduce: "웹 프론트엔드 개발자 양성 과정",
  },
  {
    icon: <img src={soldier} alt="soldier" className="icon" />,
    title: "제203특공여단 병장 만기전역",
    period: "2020.03 ~ 2021.10",
    introduce: "육군 제203특공여단에서 통신병으로 복무",
  },
  {
    icon: <GiGraduateCap className="icon" />,
    title: "유한대학교 기계공학과 졸업",
    period: "2018.03 ~ 2020.02",
    introduce: "",
  },
];
