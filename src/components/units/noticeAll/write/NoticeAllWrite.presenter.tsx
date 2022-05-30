import * as S from "./NoticeAllWrite.styled";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01NoticeWrite/Uploads01.containder";

export default function NoticeWritePresenter(props: any) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.Title>공지사항 등록</S.Title>

        <S.ReviewWriteBox>
          <S.Header>
            <S.TitleArticle>
              <S.TitleSection>
                <S.WriteTitle>제목</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="20자 이내로 작성하세요."
                  register={props.register("noticeTitle")}
                />
              </S.TitleSection>
              <div>
                <S.WriteTitle>
                  카테고리<S.Span>(1개만 선택 가능)</S.Span>
                </S.WriteTitle>
                <S.CategoryBox>
                  {props.categoryData.map((el: any, idx: any) => (
                    <label className="checkbox" key={uuidv4()}>
                      <input
                        type="checkbox"
                        id={String(idx)}
                        onChange={props.onChangeCheckCategory(el)}
                        checked={Boolean(el.checked)}
                      />
                      <span className="checkbox_text">{el.name}</span>
                    </label>
                  ))}
                </S.CategoryBox>
              </div>
            </S.TitleArticle>

            <S.SectionHr />
          </S.Header>

          <S.ImageWrapper>
            <S.ImageTitle>사진 첨부</S.ImageTitle>
            {props.fileUrls.map((el: any, index: any) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
            {/* <GraphqlMutationPageUI fileRef /> */}
          </S.ImageWrapper>

          <S.Section>
            <S.ContentBox>
              <S.WriteTitle>내용</S.WriteTitle>
              <S.ContentTextArea
                register={props.register("noticeContents")}
                placeholder="내용 작성해주세요."
              />
            </S.ContentBox>

            <S.ButtonBox>
              <S.Button type="submit">등록하기</S.Button>
              <S.Button type="button" onClick={props.onClickCancel}>
                취소하기
              </S.Button>
            </S.ButtonBox>
          </S.Section>
        </S.ReviewWriteBox>
      </form>
    </S.Wrapper>
  );
}
