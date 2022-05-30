import styled from "@emotion/styled";
import WriteReviewInput from "./NoticeAllWrite.input";
import WriteReviewTextarea from "./NoticeAllWrite.textarea";

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
  display: flex;
  justify-content: center;
`;

export const ReviewWriteBox = styled.div`
  padding: 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;

export const Header = styled.div`
  padding-bottom: 20px;
`;

export const TitleArticle = styled.div`
  display: flex;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 31px 0px 0px;
`;

export const WriteTitle = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;
export const Span = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
`;
export const InputBox = styled(WriteReviewInput)`
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
export const CategoryBox = styled.div`
  width: 445px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  .checkbox input {
    display: none;
  }
  .checkbox {
    display: flex;
  }
  .checkbox_text {
    display: flex;
    background-color: #d2d2d2;

    font-size: 16px;
    color: #ffffff;
    padding: 7px 20px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: #ff9a31;
      color: #ffffff;
    }
  }
  .checkbox input:checked + .checkbox_text {
    color: #ffffff;
    background-color: #ffa230;
  }
`;
export const SectionHr = styled.div`
  margin: 20px 0;
  width: 920px;
  height: 1.5px;
  border-radius: 50px;
  background: #dadada;
`;

export const ImageWrapper = styled.div`
  width: 920px;
  padding-top: 40px;
`;
export const ImageTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: 20px 0px;
`;
export const ContentTextArea = styled(WriteReviewTextarea)`
  padding: 10px;
  width: 920px;
  max-height: 500px;
  border: 2px solid #dadada;
  outline: #dadada;
  border-radius: 20px;
  font-weight: 700;
  color: #2c2c2c;
  ::placeholder {
    color: #dbdbdb;
  }
`;

export const ButtonBox = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  margin: 0 9px;
  padding: 10px 42px;
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
