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



  .ant-modal{
    top: 50%;
    transform: translate(0, -120px)
  }

  .ant-modal-confirm .ant-modal-body{
    padding: 0;
  }
  .ant-modal-content {
    border-radius: 20px;
    position: relative;
    background-color: #fff;
}
.ant-btn-primary {
  padding: 20px;
  text-align: center;
  line-height: 5px;
  font-weight: 900;
  color: #fff;
  border: none;
  background-color: #FF9A31;
  background: #FF9A31;
  border-radius: 10px;
  &:hover {
    background-color: #FF9A31;
    background: #FF9A31;
  }
}
.ant-modal-confirm .ant-modal-confirm-btns{
  text-align: center;
  float: inherit;
  padding: 40px;
  margin: 0;
}
.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {
  color: #fff;
}
.ant-modal-confirm-body .ant-modal-confirm-content {
  padding: 60px 0 20px 0;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  cursor: default; 
}
`;
