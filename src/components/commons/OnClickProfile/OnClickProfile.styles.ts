import styled from "@emotion/styled";

export const MainDiv = styled.div`
 background-color:#ffffff;
 border-radius: 10px;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
 height:210px;
 margin: 50px;
 padding: 28px 0;
 position:relative;
 text-align: center;
 width:180px;
  :after {
    border-bottom: 30px solid #ffffff;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top:0px solid transparent;
    content:"";
    left:75px;
    position:absolute;
    top:-30px;
  }
`;
export const NameDiv = styled.div`
color: #7B7B7B;
font-size: 20px;
font-weight: 700;
line-height: 16px;
padding: 0 0 4px 0;
`;
export const NameSpan = styled.span`
color: #FFA230;
font-size: 20px;
font-weight: 700;
line-height: 16px;
padding: 0 4px 0 0;
`;

export const PointDiv = styled.div`
color: #7B7B7B;
font-size: 16px;
font-weight: 700;
line-height: 16px;
padding:  4px 0;
`;
export const PointSpan = styled.span`
color: #FFA230;
font-size: 16px;
font-weight: 700;
line-height: 16px;
padding: 0 4px 0 0;
`;
export const LinkTxtDiv = styled.div`
color: #7B7B7B;
font-weight: 700;
font-size: 16px;
line-height: 16px;
padding:11px 0;
`;
