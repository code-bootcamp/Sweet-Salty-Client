import { css } from "@emotion/react";

export const globalstyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "pretendard";
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 50px;
  }
  @font-face {
    font-family: "pretendard";
    src: url("/font/PretendardVariable.woff2");
  }
`;
