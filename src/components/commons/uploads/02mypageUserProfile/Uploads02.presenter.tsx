import * as S from "./Uploads02.styled";

export default function Uploads02UI(props: any) {
  return (
    <S.ImgBox>
      {props.fileUrl ? (
        <S.UploadImage
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : props.data?.fetchUserLoggedIn?.userImage ? (
        <S.UploadImage
          src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn?.userImage}`}
        />
      ) : props.data?.fetchUserLoggedIn?.userId ? (
        <S.UploadImage
          style={{ backgroundColor: "linear-gradient(#ff6e30, #ffa230" }}
        />
      ) : (
        <S.UploadImage style={{ backgroundColor: "#D2D2D2" }} />
      )}

      <S.ButtonBox>
        <S.UploadButton onClick={props.onClickUpload} type="button">
          <img src="../images/gallery.png" />
        </S.UploadButton>
        <S.UploadButtonLeft onClick={props.onClickFileUpdate} type="button">
          <S.CheckCircle />
        </S.UploadButtonLeft>
      </S.ButtonBox>
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.ImgBox>
  );
}
