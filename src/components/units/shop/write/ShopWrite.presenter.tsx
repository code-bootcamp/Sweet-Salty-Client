import WriteMapPage from "../../../commons/writeMap/WriteMap.index";
import * as S from "./ShopWrite.styled";

export default function ShopWritePresenterPage(props) {
  return (
    <div>
      <div>이곳은 스토어 등록 페이지 입니다</div>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <div>상품명</div>
        <S.InputBox type="text" register={props.register("menu")} />
        <div>판매자</div>
        <S.InputBox type="text" register={props.register("seller")} />
        <div>할인율</div>
        <S.InputBox type="text" register={props.register("discount")} />
        <div>할인가격</div>
        <S.InputBox type="text" register={props.register("discountPrice")} />
        <div>원가</div>
        <S.InputBox type="text" register={props.register("originalPrice")} />
        <div>상세설명</div>
        <S.InputBox type="text" register={props.register("description")} />
        <div>재고</div>
        <S.InputBox type="text" register={props.register("stock")} />
        <div>썸네일</div>
        <input type="file" onChange={props.onChangeFile} />
        <div>쇼핑몰 주소</div>
        <S.InputBox type="text" register={props.register("pageUrl")} />

        <WriteMapPage setAddress={props.setAddress} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
