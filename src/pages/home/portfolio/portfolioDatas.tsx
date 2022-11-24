interface portfolioDatasType {
  mainImg: string;
  isMobile: boolean;
  title: string;
  subTitle: string;
  mainTechs: string[];
  introduction: JSX.Element;
}
const portfolioDatas: portfolioDatasType[] = [
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/922ec876-8a20-44da-8849-7e67e8ae982e/image.gif",
    isMobile: false,
    title: "📋 포트폴리오",
    subTitle: "개인 프로젝트",
    mainTechs: ["TypeScript", "React.js", "styled-components"],
    introduction: (
      <>
        타입스크립트를 통해 제작한 웹 포트폴리오입니다. <br />
        자기소개, 기술 스택, 프로젝트 등에 대해 소개합니다.
      </>
    ),
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/6008bcc8-5574-43b9-93e8-a17390446e8a/image.gif",
    isMobile: false,
    title: "📊 차트 페이지와 게시판 만들기",
    subTitle: "개인 프로젝트",
    mainTechs: ["JavaScript", "React.js", "Recoil", "styled-components"],
    introduction: (
      <>
        (주)위닝아이와 함께한 인턴십 개인 과제입니다. <br />
        주요 기능으로는 로그인 및 회원가입, 차트, 게시글 작성, 게시글 삭제, 댓글
        작성 및 삭제 등이 있습니다.
      </>
    ),
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/832d2f12-819f-4282-8da1-f79f1a26ca72/image.gif",
    isMobile: false,
    title: "🍫 ROECY’ CHOCOLATE",
    subTitle: "팀 프로젝트 (6인)",
    mainTechs: ["JavaScript", "React.js", "sass"],
    introduction: (
      <>
        ROYCE’ Chocolate 공식 홈페이지를 모티브로 한 프로젝트입니다. <br />
        주요 기능으로는 로그인 및 회원가입, 상품 장바구니에 담기, 구매 등이
        있습니다.
      </>
    ),
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/c9c41a3c-d588-4093-aada-a54bb42945d9/image.gif",
    isMobile: false,
    title: "🎶 FLOrida",
    subTitle: "팀 프로젝트 (6인)",
    mainTechs: ["JavaScript", "React.js", "styled-components"],
    introduction: (
      <>
        FLO 공식 홈페이지를 모티브로 한 프로젝트입니다.
        <br /> 주요 기능으로는 로그인 및 회원가입, 음악 재생, 보관함에 음악
        저장, 이용권 구매 등이 있습니다.
      </>
    ),
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/a977ed31-c05e-41ec-a101-6720d0ac7be0/image.gif",
    isMobile: true,
    title: "⌨ 플레이키보드 웹 스토어 만들기",
    subTitle: "인턴십 팀 프로젝트 (5인)",
    mainTechs: ["JavaScript", "React.js", "styled-components"],
    introduction: (
      <>
        (주)비트바이트와 함께한 인턴십 팀 과제입니다.
        <br /> 주요 기능은 카테고리 별 상품 분류, 가상 키보드 체험입니다.
      </>
    ),
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/470975b1-745f-4839-bdfc-0607d8ce265e/image.gif",
    isMobile: false,
    title: "📈 감지 센서 관리 프로그램 만들기",
    subTitle: "인턴십 팀 프로젝트 (5인)",
    mainTechs: ["JavaScript", "React.js", "styled-components"],
    introduction: (
      <>
        (주)바딧과 함께한 인턴십 팀 과제입니다.
        <br />
        주요 기능으로는 센서 목록 필터링, 센서 데이터 csv 파일로 변환, 그래프
        순서 변경, 그래프 확대 및 축소가 있습니다.
      </>
    ),
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/3b468dca-33de-4276-b284-d9afc34d5d0d/image.gif",
    isMobile: true,
    title: "🎙️ 오디오 녹음 프로그램 만들기",
    subTitle: "인턴십 팀 프로젝트 (3인)",
    mainTechs: ["JavaScript", "React.js", "styled-components", "Firebase"],
    introduction: (
      <>
        (주)하이와 함께한 인턴십 팀 과제입니다.
        <br />
        주요 기능으로는 녹음, 녹음 파일 Firebase에 저장, Firebase에서 불러오기
        등이 있습니다.
      </>
    ),
  },
];

export { portfolioDatas };
export default portfolioDatasType;
