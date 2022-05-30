import TopButton from "../../commons/topbutton";
import * as S from "./Intro.styles";

export const IntroPresenter = () => {
  return (
    <S.Wrapper>
      <S.Title30px>서비스 소개</S.Title30px>

      <S.LogoX3 src="/images/logoX3.png" />

      <S.Title50px>
        어서오세요, <S.Span>단짠 맛집</S.Span>입니다!
      </S.Title50px>

      <S.Contents20px>
        유튜브에 의하여 영상 매체가 주가 되어버린 세상, 그리고 2022년.
        <br /> 가보고 싶은 맛집을 찾으면서 불필요한 정보가 싫었던 여러분께
        <br /> 글에서만 느낄 수 있었던 솔직한 감칠맛을 제공해드립니다.
      </S.Contents20px>

      <S.Contents20px style={{ paddingTop: 82, paddingBottom: 100 }}>
        전국에 계시는 단짝님들의 단맛, 짠맛의 게시글을 통해 맛집 정보를 확인하고
        <br /> 소통하고 싶은 단짝을 팔로우하며, 맛집 식사권도 구매하고 직접
        경험해보세요.
      </S.Contents20px>

      <S.Contents20px>
        여러 이유로 맛집에 갈 수 없었던 맛객님과 코로나로 인해 힘드신
        소상공인분들을 위해
        <br /> 저희 단짠 맛집 서비스는 다양한 맛을 제공해드리며 응원합니다.
      </S.Contents20px>

      <S.Title30px style={{ paddingTop: 200, paddingBottom: 100 }}>
        프로젝트 팀원 소개
      </S.Title30px>
      <S.DeveloperBox style={{ width: 890 }}>
        <S.DeveloperTitle>Back-end Developoer</S.DeveloperTitle>

        <S.MemberBox>
          <S.Member style={{ marginRight: 30 }}>
            <S.MemberImg src="/images/8team/ehrms.png" />
            <S.MemberTitle>팀장: 유도근</S.MemberTitle>
            <S.MemberInfo>
              Contact: (이메일) |{" "}
              <S.MailImg src="https://blog.kakaocdn.net/dn/cdwZvZ/btqGmPkoVp9/HxrPkjQPEjeeNLXDloyNGK/img.png" />
              (깃허브){" "}
            </S.MemberInfo>
          </S.Member>
          <S.Member>
            <S.MemberImg src="/images/8team/qhdls.png" />
            <S.MemberTitle>팀원: 김보인</S.MemberTitle>
            <S.MemberInfo>
              Contact: (이메일) |{" "}
              <S.MailImg src="https://blog.kakaocdn.net/dn/cdwZvZ/btqGmPkoVp9/HxrPkjQPEjeeNLXDloyNGK/img.png" />
              (깃허브){" "}
            </S.MemberInfo>
          </S.Member>
        </S.MemberBox>
      </S.DeveloperBox>

      <S.DeveloperBox
        style={{ width: 1394, marginTop: 100, marginBottom: 100 }}
      >
        <S.DeveloperTitle>Front-end Developoer</S.DeveloperTitle>

        <S.MemberBox>
          <S.Member>
            <S.MemberImg src="/images/8team/tpwls.png" />
            <S.MemberTitle>팀원: 임세진</S.MemberTitle>
            <S.MemberInfo>
              Contact: (이메일) |{" "}
              <S.MailImg src="https://blog.kakaocdn.net/dn/cdwZvZ/btqGmPkoVp9/HxrPkjQPEjeeNLXDloyNGK/img.png" />
              (깃허브){" "}
            </S.MemberInfo>
          </S.Member>
          <S.Member style={{ marginLeft: 30, marginRight: 30 }}>
            <S.MemberImg src="/images/8team/alsdud.png" />
            <S.MemberTitle>팀원: 김민영</S.MemberTitle>
            <S.MemberInfo>
              Contact: (이메일) |{" "}
              <S.MailImg src="https://blog.kakaocdn.net/dn/cdwZvZ/btqGmPkoVp9/HxrPkjQPEjeeNLXDloyNGK/img.png" />{" "}
              (깃허브){" "}
            </S.MemberInfo>
          </S.Member>
          <S.Member>
            <S.MemberImg src="/images/8team/clgns.png" />
            <S.MemberTitle>팀원: 김치훈</S.MemberTitle>
            <S.MemberInfo>
              Contact:
              <S.MailImg src="https://play-lh.googleusercontent.com/YuB811yIABwkqgTr82XnG79VtfTwJ5dPUUSIs8Oe9q5-aJv6dk-z3BirQEyo5a59Nw" />{" "}
              rlaclgns321@naver.com |{" "}
              <S.MailImg src="https://blog.kakaocdn.net/dn/cdwZvZ/btqGmPkoVp9/HxrPkjQPEjeeNLXDloyNGK/img.png" />{" "}
              rlaclgns321@naver.com{" "}
            </S.MemberInfo>
          </S.Member>
        </S.MemberBox>
      </S.DeveloperBox>

      <S.DeveloperBox style={{ width: 453 }}>
        <S.DeveloperTitle>UX/UI Designer</S.DeveloperTitle>

        <S.Member>
          <S.MemberImg src="/images/8team/wngP.png" />
          <S.MemberTitle>팀원: 박주혜</S.MemberTitle>
          <S.MemberInfo>
            Contact: qkrwngp4648@naver.com | @joohye__park{" "}
          </S.MemberInfo>
        </S.Member>
      </S.DeveloperBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.Wrapper>
  );
};
