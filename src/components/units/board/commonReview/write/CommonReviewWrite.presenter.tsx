import dynamic from "next/dynamic";
import WriteMapPage from "../../../../commons/writeMap/WriteMap.index";
import * as S from "./CommonReviewWrite.styles";
import { CheckOutlined } from "@ant-design/icons";

const Editor = dynamic(() => import("../../../../commons/toast/editor"), {
  ssr: false,
});

export default function CommonReviewWritePresenter(props) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.Title>단짠 게시판 글 등록</S.Title>

        <S.ReviewWriteBox>
          <S.Header>
            <S.TitleArticle>
              <S.TitleSection>
                <S.WriteTitle>제목</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="20자 이내로 작성하세요."
                  register={props.register("boardTitle")}
                />
              </S.TitleSection>
              <div>
                <S.WriteTitle>
                  카테고리<S.Span>(1개만 선택 가능)</S.Span>
                </S.WriteTitle>
                <S.CategoryBox>
                  {props.categoryData.map((el, idx) => (
                    <label className="checkbox" key={el.key}>
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

            <S.MapArticle>
              <S.WriteTitle>가게선택</S.WriteTitle>
              <S.Map>
                <WriteMapPage setAddress={props.setAddress} />
              </S.Map>
            </S.MapArticle>

            <S.SugarSaltArticle>
              <div>
                <S.WriteTitle style={{ color: "#FF9A31" }}>단맛</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="30자 이내로 작성하세요."
                  register={props.register("boardSugar")}
                />
              </div>

              <div>
                <S.WriteTitle style={{ color: "red" }}>짠맛</S.WriteTitle>
                <S.InputBox
                  type="text"
                  placeholder="30자 이내로 작성하세요."
                  register={props.register("boardSalt")}
                />
              </div>
            </S.SugarSaltArticle>
          </S.Header>

          <S.Section>
            <S.MenuArticle>
              <S.WriteTitle>
                메뉴 선택<S.Span>(1개만 선택 가능)</S.Span>
              </S.WriteTitle>

              <S.MenuBox>
                {props.menuTagData.map((el, idx) => (
                  <label className="checkbox" key={el.key}>
                    <input
                      type="checkbox"
                      id={String(idx)}
                      onChange={props.onChangeCheckMenu(el)}
                      checked={Boolean(el.checked)}
                    />
                    <span className="checkbox_text">{el.value}</span>
                  </label>
                ))}
              </S.MenuBox>
            </S.MenuArticle>

            <S.MoodArticle>
              <S.WriteTitle>
                분위기 선택<S.Span>(여러개 선택 가능)</S.Span>
              </S.WriteTitle>

              <S.MoodBox moodTagData={props.moodTagData}>
                {props.moodTagData.map((el, idx) => (
                  <label className="checkbox" key={el.key}>
                    <input
                      type="checkbox"
                      value={el.value}
                      id={idx}
                      onChange={(e) => {
                        props.onChangeCheckMood(
                          e.target.checked,
                          e.target.value
                        )(e);
                      }}
                    />
                    <span className="checkbox_text">
                      <img className="check_icon" src="/images/check.png" />
                      {el.value}
                    </span>
                  </label>
                ))}
              </S.MoodBox>
            </S.MoodArticle>

            <S.EditorArticle>
              <S.WriteTitle>내용</S.WriteTitle>
              <Editor
                // ref={props.editorRef}
                // onChangeEditor={props.onChangeEditor}
                setBoardContents={props.setBoardContents}
                // value={props.getValues("boardContents") || ""}
              />
              {/* <S.TextAreaBox type="text" placeholder="200자 이내로 작성하세요." maxLength="200" /> */}
            </S.EditorArticle>

            <S.ButtonBox>
              <S.Button type="submit">등록하기</S.Button>
              <S.Button onClick={props.onClickCancel}>취소하기</S.Button>
            </S.ButtonBox>
          </S.Section>
        </S.ReviewWriteBox>
      </form>
    </S.Wrapper>
  );
}
