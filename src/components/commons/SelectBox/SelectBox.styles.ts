import styled from '@emotion/styled'

export const Select = styled.select`
border: 2px solid #dadada;
border-radius: 10px;
color : #676767;
font-size:16px;
font-weight: 700;
padding: 10px 10px 10px 20px;
:focus{
    border-color: #FFA230;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 162, 48, .6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 162, 48, .6);


}


`;
export const Option = styled.option`
color : #676767;
font-size:16px;
font-weight: 700;
`;