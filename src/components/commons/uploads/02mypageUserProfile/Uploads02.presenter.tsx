// 마이페이지 이미지 업로드 presenter --- 김치훈

import * as S from "./Uploads02.styled";

export default function Uploads02UI(props: any) {
  return (
    <S.ImgBox>
    
    {props.fileUrl 
    ? (<S.UploadImage src={`https://storage.googleapis.com/${props.fileUrl}`} />) 
    : props.data?.fetchUserLoggedIn?.userImage 
      ? (<S.UploadImage src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn?.userImage}`}/>) 
      : (<S.UploadImage src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" />)}

      <S.ButtonBox>
        <S.UploadButton onClick={props.onClickUpload} type="button">
          <img src="../images/gallery.png"/>
        </S.UploadButton>
        <S.UploadButtonLeft onClick={props.onClickFileUpdate} type="button">
          <S.CheckCircle />
        </S.UploadButtonLeft>
      </S.ButtonBox>
        {/* display: none */}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.ImgBox>
  );
}
