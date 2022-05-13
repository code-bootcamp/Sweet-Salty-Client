import styled from '@emotion/styled';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

const Arrow = styled(ArrowUpwardRoundedIcon)`
&&{transition: all 0.1s linear;}
:hover{
    transform: scale(1.2);
}
`;

const ArrowDiv = styled.div`
align-items: center;
background-color: #ffffff;
border-radius: 26px;
display: flex;
height: 52px;
justify-content:center;
width: 52px;
`;


export default function GoUpBtn(){
return(
    <ArrowDiv>
    <Arrow/>
    </ArrowDiv>
)
}