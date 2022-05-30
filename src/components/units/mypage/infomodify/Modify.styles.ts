import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding-bottom: 100px;
  font-weight: 700;
  font-size: 40px;
`;
export const SearchBarBox = styled.div`
  padding-bottom: 46px;
`;
export const NoticeBox = styled.div`
  padding: 44px 40px;
  width: 1100px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px #dbdbdb;
`;

export const WriteTitle = styled.div`
  padding: 40px 0 10px 0;
  font-size: 16px;
  font-weight: 700;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 16px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {
    color: #dbdbdb;
  }
`;

export const Button = styled.button`
  margin: 0 9px;
  width: 80px;
  height: 40px;
  background: #fff;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #ff9a31;
    border: 2px solid #ff9a31;
  }
  &:active {
    color: #fff;
    background: #ff9a31;
  }
`;

export const SubWriteTitle = styled.div`
  padding: 20px 0 10px 0;
  font-size: 12px;
  font-weight: 700;
  color: #676767;
`;
export const Span = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Category = styled.div`
  margin: 7px 9px 0 0;
  padding: 7px 20px;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  background: #dbdbdb;
  &:hover {
    background: #ff9a31;
  }
`;
export const SectionHr = styled.div`
  margin: 20px 0;
  width: 920px;
  height: 1.5px;
  border-radius: 50px;
  background: #dadada;
`;
export const MoodBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonBox = styled.div`
  padding: 50px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CompleteButton = styled.button`
  margin: 0 9px 0px 9px;
  padding: 7px 40px;
  color: #fff;
  background: #ff9a31;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
export const ResignMB = styled.div`
  margin: 0 auto;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
`;
