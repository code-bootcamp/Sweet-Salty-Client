import * as S from "./SelectBox.styles"

export default function SelectBox (){

return (<>
<S.Select>
    <S.Option selected disabled >지역 선택</S.Option>
    <S.Option value="seoul">서울특별시</S.Option>
    <S.Option value="incheon">인천광역시</S.Option>
</S.Select>
</>)
}