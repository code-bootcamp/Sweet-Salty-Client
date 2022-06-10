import { getDateDot } from "../../libraries/date";
import * as S from "./MyreviewCard.styles";

export default function MyreviewCardPresenter(props: any) {
  return (
    <S.ItemMainDiv>
      <S.ItemImg
        id={props.el.boardId + props.el.boardSubject}
        onClick={props.onClickMoveMyReviewDetail}
        el={props.el}
      >
        <S.HeaderBox>
          <S.BoardSubject>
            {props.el?.boardSubject === "REQUEST" && "가주세요!"}
            {props.el?.boardSubject === "VISITED" && "가봤어요!"}
            {props.el?.boardSubject === "REVIEW" && "단짠 리뷰"}
            {props.el?.boardSubject === "TASTER" && "시식단 리뷰"}
          </S.BoardSubject>
        </S.HeaderBox>
        {props.loginUser.userNickname === props.User.userNickname ? (
          <S.ItemProfile
            src={`https://storage.googleapis.com/${props.loginUser?.userImage}`}
          />
        ) : (
          <S.ItemProfile
            src={`https://storage.googleapis.com/${props.User?.userImage}`}
          />
        )}
      </S.ItemImg>

      <S.ItemInfoDiv>
        <S.FlexBox>
          <S.ItemInfoTitleDiv>{props.el?.boardTitle}</S.ItemInfoTitleDiv>

          <S.ItemInfoUserDiv>
            <S.Span>{props.User?.userNickname}</S.Span> 단짝님
          </S.ItemInfoUserDiv>
        </S.FlexBox>

        <S.ItemInfoMidDiv>
          <S.ItemInfoStoreName>
            {props.el?.place?.placeName}
          </S.ItemInfoStoreName>

          <S.P></S.P>

          <S.ItemInfoLocationDiv>
            {props.el?.place?.placeAddress}
          </S.ItemInfoLocationDiv>
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
              <S.ItemInfoCountDiv>{props.el?.boardHit}</S.ItemInfoCountDiv>
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
