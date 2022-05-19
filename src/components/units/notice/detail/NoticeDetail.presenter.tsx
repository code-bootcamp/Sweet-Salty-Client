// 공지사항 Detail Presenter --- 김치훈

import Hits from "../../../commons/hits"
import TopButton from "../../../commons/topbutton"
import * as S from "./NoticeDetail.styles"

export default function NoticeDetailPresenter(props: any){


  return (
  <S.Wrapper>
    <S.Title>공지사항 <S.RightOutline /> 이벤트</S.Title>

    <S.NoticeDetail>
      <S.NoticeDetailHeader>
        <S.NoticeDetailTitleBox>
          <S.NoticeDetailCategory>
            {/* 말머리 */}
            이벤트
          </S.NoticeDetailCategory>
          <S.NoticeDetailTitle>단짝 스토어에서 첫 선물하고 100 포인트 적립하세요!</S.NoticeDetailTitle>
        </S.NoticeDetailTitleBox>
        
        <S.FlexBox>
          <S.NoticeDetailWriterBox>
            <S.NoticeDetailWriter>관리자</S.NoticeDetailWriter>
            <S.VerticalLine>|</S.VerticalLine>
            <S.NoticeDetailCreateAt>2022.5.10</S.NoticeDetailCreateAt>
          </S.NoticeDetailWriterBox>
          <Hits />
        </S.FlexBox>
      </S.NoticeDetailHeader>

      <S.NoticeDetailHr/>

      <S.ImageBox>
        <S.Image src=""></S.Image>
        <S.Image src=""></S.Image>
      </S.ImageBox>

      <S.Contents>
      <S.P>
        안녕하세요, 단짠 맛집의 단짝님! <br/>

        단짝 스토어에서 원하는 메뉴를 처음 구매 시, 100 포인트를 적립할 수 있는 이벤트를 진행하고 있습니다. <br/>

        많은 관심 부탁드립니다. 감사합니다 :) <br/>
      </S.P>
      </S.Contents>

      <S.NoticeDetailHr/>

      <S.ListButtonBox>
        <S.ListButton onClick={props.onClickNoticeList}>목록으로</S.ListButton>
      </S.ListButtonBox>
    </S.NoticeDetail>

    <S.TopButtonBox>
      <TopButton/>
    </S.TopButtonBox>
  </S.Wrapper>
  )
}