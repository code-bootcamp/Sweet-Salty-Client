import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  cursor: default;
  display: flex;
  align-items: center;
`;
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color: #fff;
  cursor: default;
`;

export const ReviewWriteBox = styled.div`
  padding: 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;
export const ReviewWriteBoxHr = styled.div`
  margin: 20px 0;
  width: 920px;
  height: 1.5px;
  border-radius: 50px;
  background: #dadada;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WriteTitle = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: default;
`;
export const InputBox = styled.input`
  padding: 12px 16px;
  width: 445px;
  height: 46px;
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
export const RightBox = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Category = styled.div`
  padding: 7px 30px;
  color: #fff;
  transition: 0.2s;
  cursor: default;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  background: #ff9a31;
`;
export const RightBoxHr = styled.div`
  margin: 20px 0;
  width: 446px;
  height: 1.5px;
  border-radius: 50px;
  background: #dadada;
`;

export const Map = styled.div`
  width: 920px;
  height: 600px;
  text-align: center;
  line-height: 545px;
  background: #999;
  border-radius: 20px;
`;

export const ImageBox = styled.div`
  width: 300px;
  height: 250px;
  background: #dadada;
  border-radius: 20px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageText = styled.div`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    font-size: 16px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const TextAreaBox = styled.textarea`
  padding: 12px 16px;
  max-width: 920px;
  min-width: 920px;
  height: 492px;
  max-height: 492px;
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

export const ButtonBox = styled.div`
  padding: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  margin: 0 9px;
  padding: 7px 42px;
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
`;
