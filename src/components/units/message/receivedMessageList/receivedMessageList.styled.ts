// 쪽지함 리스트 styles --- 임세진, 김치훈

import styled from "@emotion/styled";

export const MsgWrapper= styled.div`
    margin: 0 auto;
    width: 1120px;
`;
export const TitleTxt = styled.div`
    padding: 100px 0;
    color: #2c2c2c;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`;
export const MsgHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MsgAmountDiv = styled.div`
    color: #676767;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
`;

export const MsgAmountSpan = styled.span`
    color: #FF9A31;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
`;

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
    cursor: pointer;
`;
export const WriteImg=styled.img`
    width: 18px;
    margin-right: 10px;
`
export const MsgListDiv = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 0 auto;
`;


export const MessageTh = styled.div`
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #676767;
    font-weight: 700;
    text-align: center;
`;
export const MessageThCategory = styled.div`
    width: 180px;
    cursor: default;
    font-size: 18px;
`;
export const MessageThContent = styled.div`
    width: 480px;
    cursor: default;
    font-size: 18px;
`;
export const MessageThCreateAt = styled.div`
    width: 280px;
    cursor: default;
    font-size: 18px;
`;
export const MessageThHr = styled.div`
    width: 1072px;
    height: 2px;
    border-radius: 50px;
    background: #FF9A31;
`;


export const MessageBoxDiv = styled.div`
    border-bottom : 1px solid #dadada;
    display:flex;
    height: 78px;
    align-items : center;
    :last-child{
        border:none;
    }
`;
export const MessageDataDiv = styled.div`
    display:flex;`;

export const ProfileDiv = styled.div`
    display: flex;
    align-items : center;
`;
export const SendUserDiv = styled.div`
    align-items: center;
    color: #FF9A31;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
`;
export const ProfileImg = styled.img`
    border-radius: 50%;
    height: 30px;
    width: 30px;
`;

export const DateDiv = styled.div`
    display: flex;
    align-items : center;
    color: #2c2c2c;
    font-size: 16px;
    font-weight: 500;
`;
export const MessageContents = styled.div`
    display: flex;
    align-items : center;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: ${(props)=>props.isRead?"#bbbbbb":"#2c2c2c"};
    overflow: hidden;
    text-overflow: ellipsis;
    width:500px;
    white-space: nowrap;
`;

export const DeleteBtn = styled.div`
    border: none;
    background-color: transparent;
    color: #7B7B7B;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    text-decoration: underline;
`;