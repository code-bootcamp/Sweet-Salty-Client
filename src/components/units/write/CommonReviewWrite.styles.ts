import styled from "@emotion/styled";




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
`

export const ReviewWriteBox = styled.div`
  padding: 40px;
  width: 1000px;
  height: 1457px;
  background: #fff;
  border-radius: 20px;
`;

export const RightBoxHr = styled.div`
  margin: 20px 0;
  width: 446px;
  height: 1.5px;
  border-radius: 50px;
  background: #DADADA;
`

export const Header = styled.div`
  padding-bottom: 36px;
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
`;
export const Map = styled.div`
width: 445px;
  height: 720px;
  text-align: center;
  line-height: 703px;
  background: #999;
  border-radius: 20px;
  `
  
export const RightBox = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
`
export const Span = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
  `
export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Category = styled.div`
  margin: 7px 9px 0 0;
  padding: 10px 20px;
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
  export const TextAreaBox = styled.textarea`
  padding: 12px 16px;
  max-width: 445px;
  min-width: 445px;
  max-height: 144px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {color: #dbdbdb;}
  `
  
  export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  `
  export const SectionHr = styled.div`
    margin: 20px 0;
    width: 920px;
    height: 1.5px;
    border-radius: 50px;
    background: #DADADA;
  `
  export const MoodBox = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  export const Mood = styled.div`
    margin: 7px 7px 0 0;
    padding: 10px 30px;
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

  export const ImageBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `

  export const ButtonBox = styled.div`
    padding: 40px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `
  export const Button = styled.button`
    margin: 0 9px;
    padding: 10px 42px;
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