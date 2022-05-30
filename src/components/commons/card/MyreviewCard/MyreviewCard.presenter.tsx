// 마이 단짠 게시글 카드 Presenter ---김치훈

import { getDateDot } from "../../libraries/date";
import * as S from "./MyreviewCard.styles";

export default function MyreviewCardPresenter(props: any) {
  return (
    <S.ItemMainDiv>
      <S.ItemImg 
        id={props.el.boardId+props.el.boardSubject} 
        onClick={props.onClickMoveMyReviewDetail} 
        el={props.el}
        >
        <S.BoardSubject>
          {props.el?.boardSubject === "REQUEST" && "가주세요!"}
          {props.el?.boardSubject === "VISITED" && "가봤어요!"} 
          {props.el?.boardSubject === "REVIEW" && "단짠 리뷰"}
          {props.el?.boardSubject === "TASTER" && "시식단 리뷰"}
        </S.BoardSubject>
        {props.el?.user?.userImage 
          ?
          <S.ItemProfile src={`https://storage.googleapis.com/${props.el?.user?.userImage}`} />
          :
          // 기본 이미지
          <S.ItemProfile src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" />
        }
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.FlexBox>

          <S.ItemInfoTitleDiv>{props.el?.boardTitle}</S.ItemInfoTitleDiv>

          <S.ItemInfoUserDiv>
            <S.Span>{props.el?.boardWriter}</S.Span> 단짝님
          </S.ItemInfoUserDiv>

        </S.FlexBox>

          <S.ItemInfoMidDiv>
              <S.ItemInfoStoreName>{props.el?.place?.placeName}</S.ItemInfoStoreName>

              <S.P></S.P>

              <S.ItemInfoLocationDiv>{props.el?.place?.placeAddress}</S.ItemInfoLocationDiv>
          </S.ItemInfoMidDiv>

          <S.ItemInfoBottomDiv>

            <S.FlexBox2>
              <S.FlexBox2>
                <S.ItemInfoImg src="/images/likeCount.png" alt="like" />
                <S.ItemInfoCountDiv>
                  {props.el?.boardLikeCount}
                </S.ItemInfoCountDiv>
              </S.FlexBox2>
              <S.FlexBox2>
                <S.ItemInfoImg src="/images/viewCount.png" alt="hits" />
                <S.ItemInfoCountDiv>
                  {props.el?.boardHit}
                </S.ItemInfoCountDiv>
              </S.FlexBox2>
            </S.FlexBox2>
            
            <S.IteminfoDateDiv>
              {getDateDot(props.el?.createAt)}
            </S.IteminfoDateDiv>
          </S.ItemInfoBottomDiv>

        </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
