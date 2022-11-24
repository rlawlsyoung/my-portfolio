interface portfolioDatasType {
  mainImg: string;
  title: string;
  subTitle: string;
  mainTechs: string[];
  introduction: string;
}
const portfolioDatas: portfolioDatasType[] = [
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/832d2f12-819f-4282-8da1-f79f1a26ca72/image.gif",
    title: "🍫 ROECY’ CHOCOLATE",
    subTitle: "팀 프로젝트 (6인)",
    mainTechs: ["JavaScript", "React.js", "sass"],
    introduction:
      "ROYCE’ Chocolate 공식 홈페이지를 모티브로 한 프로젝트입니다. 주요 기능으로는 로그인 및 회원가입, 상품 장바구니에 담기, 구매 등이 있습니다.",
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/c9c41a3c-d588-4093-aada-a54bb42945d9/image.gif",
    title: "🎶 FLOrida",
    subTitle: "팀 프로젝트 (6인)",
    mainTechs: ["JavaScript", "React.js", "sass"],
    introduction:
      "FLO 공식 홈페이지를 모티브로 한 프로젝트입니다. 주요 기능으로는 로그인 및 회원가입, 음악 재생, 보관함에 음악 저장, 이용권 구매 등이 있습니다.",
  },
  {
    mainImg:
      "https://velog.velcdn.com/images/jinyoung985/post/a977ed31-c05e-41ec-a101-6720d0ac7be0/image.gif",
    title: "🎶 FLOrida",
    subTitle: "팀 프로젝트 (6인)",
    mainTechs: ["JavaScript", "React.js", "styled-components"],
    introduction:
      "FLO 공식 홈페이지를 모티브로 한 프로젝트입니다. 주요 기능으로는 로그인 및 회원가입, 음악 재생, 보관함에 음악 저장, 이용권 구매 등이 있습니다.",
  },
];

export { portfolioDatas };
export default portfolioDatasType;
