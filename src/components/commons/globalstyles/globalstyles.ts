import { css } from "@emotion/react";

export const globalstyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "pretendard";
    font-size: 20px;
  }
  // 스크롤바 배경 === 김치훈
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
  }

  // 스크롤바 막대기 === 김치훈
  &::-webkit-scrollbar-thumb {
    background-color: #ffa230;
    border-radius: 50px;
  }
  @font-face {
    font-family: "pretendard";
    src: url("/font/PretendardVariable.woff2");
  }
`;
