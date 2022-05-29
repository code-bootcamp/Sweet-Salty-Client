// 받은 쪽지함 리스트 styles --- 임세진, 김치훈

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
    padding: 24px 24px 0 24px;
    margin: 0 auto;
    width: 1120px;
    background-color: #ffffff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const MessageTh = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #676767;
    font-weight: 700;
    text-align: center;
`;
export const MessageThSend = styled.div`
    width: 170px;
    cursor: default;
    font-size: 16px;
`;
export const MessageThContent = styled.div`
    width: 546px;
    cursor: default;
    font-size: 16px;
`;
export const MessageThCreateAt = styled.div`
    width: 310px;
    cursor: default;
    font-size: 16px;
`;
export const MessageThDelete = styled.div`
    width: 106px;
    cursor: default;
    font-size: 16px;
`;
export const MessageThHr = styled.div`
    margin: 20px auto;
    width: 1072px;
    height: 2px;
    border-radius: 50px;
    background: #FF9A31;
`;


export const MessageBoxDiv = styled.div`
    width: 1072px;
    display: flex;
    justify-content: space-between;
    align-items : center;
`;
export const ProfileDiv = styled.div`
    width: 170px;
    display: flex;
    align-items : center;
`;
export const ProfileImg = styled.img`
    margin-right: 8px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: default;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
export const SendUserDiv = styled.div`
    color: #FF9A31;
    font-weight: 600;
    font-size: 16px;
    cursor: default;
`;

export const MessageContents = styled.div`
    width: 546px;
    display: flex;
    align-items : center;
    font-weight: 600;
    font-size: 16px;
    color: ${(props: any)=>props.isRead?"#bbbbbb":"#2c2c2c"};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;
export const DateDiv = styled.div`
    width: 310px;
    display: flex;
    justify-content: center;
    color: #2c2c2c;
    font-size: 16px;
    font-weight: 500;
    cursor: default;
`;

export const DeleteBtn = styled.div`
    width: 106px;
    color: #7B7B7B;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: end;
    align-items: center;
    text-decoration: underline;
`;

export const MessageHr = styled.div`
    margin: 20px auto;
    width: 1072px;
    height: 1px;
    border-radius: 50px;
    background: #DADADA;
`;


export const PaginationBox = styled.div`
    padding: 30px 0 100px 0;
`;