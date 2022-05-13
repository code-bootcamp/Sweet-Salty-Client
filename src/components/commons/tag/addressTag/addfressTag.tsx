import styled from '@emotion/styled';
// import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

const TagDiv = styled.div`
align-items: center;
border: 3px solid #d8d8d8;
border-radius:20px;
color:#7b7b7b;
cursor: pointer;
display: flex;
font-size: 16px;
font-weight:600;
height: 40px;
justify-content:center;
padding: 0 5px;
width:120px;
`;
// const ImgBoxDiv = styled.div`
// padding: 5px;
// `;
// const CheckImg= styled(DoneRoundedIcon)`
// &&{font-size: 20px;
// color: transparent;}
// `;
export default function AddressTag(){
    return(
        <TagDiv>
        {/* <ImgBoxDiv><CheckImg/></ImgBoxDiv> */}
        강남구
        </TagDiv>
    )
}