import styled from "@emotion/styled";

export const WriteBtn = styled.button`
background: linear-gradient(90deg, #FF6E30 0%, #FFA230 100%);
border: none;
border-radius: 25px;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
font-size:16px;
font-weight: 600;
color: #ffffff;
line-height:24px;
padding:13px 22px;
text-align: center;
`;

export const MessageBoxDiv = styled.div`
display:flex;`;

export const ProfileImgDiv = styled.div`
border-radius: 50%;
height: 30px;
width: 30px;`;
export const ProfileImg = styled.img`
border-radius: 50%;
height: 30px;
width: 30px;`;

export const MessageContents = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    width:500px;
    white-space: nowrap;
`;