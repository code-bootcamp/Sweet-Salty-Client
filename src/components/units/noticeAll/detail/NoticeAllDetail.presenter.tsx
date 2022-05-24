// 전체 공지사항 Detail Presenter --- 김치훈

import { getDateDot } from "../../../commons/libraries/date"
import TopButton from "../../../commons/topbutton"
import * as S from "./NoticeAllDetail.styles"

export default function NoticeAllDetailPresenter(props: any){

  return (
  <S.Wrapper>
    <S.Title>공지사항</S.Title>

    <S.NoticeDetail>
      <S.NoticeDetailHeader>
        <S.NoticeDetailTitleBox>
          <S.NoticeDetailCategory>
              {props.data?.fetchNotice?.noticeSubject === "TASTING" && "시식단 리뷰"}
              {props.data?.fetchNotice?.noticeSubject === "NOTICE" && "공지"}
              {props.data?.fetchNotice?.noticeSubject === "EVENT" && "이벤트"} 
              {props.data?.fetchNotice?.noticeSubject === "PROMOTION" && "프로모션"}
          </S.NoticeDetailCategory>
          <S.NoticeDetailTitle>
            {props.data?.fetchNotice?.noticeTitle}
          </S.NoticeDetailTitle>
        </S.NoticeDetailTitleBox>
        
        <S.FlexBox>
          <S.NoticeDetailWriterBox>
            <S.NoticeDetailWriter>관리자</S.NoticeDetailWriter>
            <S.VerticalLine>|</S.VerticalLine>
            <S.NoticeDetailCreateAt>
              {getDateDot(props.data?.fetchNotice?.createAt)}
            </S.NoticeDetailCreateAt>
          </S.NoticeDetailWriterBox>
        <S.ViewCount>
          <S.ViewIcon src={"/images/viewCount.png"} />
          {props.data?.fetchNotice?.noticeHit}
        </S.ViewCount>
        </S.FlexBox>
      </S.NoticeDetailHeader>

      <S.NoticeDetailHr/>

      <S.ImageBox>
        <S.Image src=""></S.Image>
        <S.Image src=""></S.Image>
      </S.ImageBox>

      <S.Contents>
      <S.P>
        {props.data?.fetchNotice?.noticeContents}
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