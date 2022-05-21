// 가봤어요! Write styles -김치훈

import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons"

export const Wrapper = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: radial-gradient(#ff6e30, #ff9a31);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  padding: 100px 0;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  cursor: default;
  display: flex;
  align-items: center;
`
export const RightOutline = styled(RightOutlined)`
  padding: 0 15px;
  color: #fff;
  cursor: default;
`

export const ReviewWriteBox = styled.div`
  padding: 40px 40px 0 40px;
  width: 1000px;
  background: #fff;
  border-radius: 20px;
`;
export const ReviewWriteBoxHr = styled.div`
  margin: 20px 0;
  width: 920px;
  height: 1.5px;
  border-radius: 50px;
  background: #DADADA;
`

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
  ::placeholder {color: #dbdbdb;}
`
export const RightBox = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
`
export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Category = styled.div`
  padding: 7px 30px;
  color: #fff;
  transition: 0.2s;
  cursor: default;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  background: #FF9A31;
`
export const RightBoxHr = styled.div`
  margin: 20px 0;
  width: 446px;
  height: 1.5px;
  border-radius: 50px;
  background: #DADADA;
`

export const Map = styled.div`
  width: 920px;
  height: 600px;
  text-align: center;
  line-height: 545px;
  background: #999;
  border-radius: 20px;
`

export const ProsConsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const ProsCons = styled.div`
  display: flex;
  flex-direction: column;
`

export const Span = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
  `
export const MenuCategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const MenuCategory = styled.div`
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
    background: #FF9A31;
  }
  `
  export const MoodBox = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  export const Mood = styled.div`
    margin: 7px 7px 0 0;
    padding: 7px 30px;
    color: #7B7B7B;
    background: #fff;
    transition: 0.2s;
    cursor: pointer;
    border: 2px solid #D8D8D8;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    &:hover {
      color: #FF9A31;
      border: 2px solid #FF9A31;
    }
  `

export const ImageBox =styled.div`
  width: 300px;
  height: 250px;
  background: #dadada;
  border-radius: 20px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageText = styled.div`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  transition: .2s;
  cursor: pointer;
  &:hover {
    font-size: 16px;
  }

`
  
  
  export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  `
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
    ::placeholder {color: #dbdbdb;}
  `

  export const ButtonBox = styled.div`
    padding: 40px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `
  export const Button = styled.button`
    margin: 0 9px;
    padding: 7px 42px;
    background: #fff;
    border: 2px solid #DADADA;
    border-radius: 10px;
    color: #676767;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #FF9A31;
      border: 2px solid #FF9A31;
    }
  `