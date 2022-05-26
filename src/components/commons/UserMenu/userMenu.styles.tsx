// mypageMenu Styles --- 김치훈

import styled from "@emotion/styled";


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MypageMenuBox = styled.div`
  margin: 46px auto 0 auto;
  width: 1120px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const MypageMenu = styled.div`
  width: 299px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  color:${(props: any)=> 
    props.ismypage ||
    props.ismypageLike ||
    props.ismypagePoint
    ? "#fff"
    : "#7b7b7b" 
  };
  background: ${(props: any)=> 
    props.ismypage ||
    props.ismypageLike ||
    props.ismypagePoint
    ? "linear-gradient(#ff6e30, #ffa230)"
    : "#fff" 
  };
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#ff6e30, #ffa230);
    color: #fff;
  }
`;
