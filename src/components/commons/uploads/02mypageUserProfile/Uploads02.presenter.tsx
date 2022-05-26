import {
  ImgBox,
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads02.styled";

export default function Uploads02UI(props: any) {
  return (
    <ImgBox>
        <UploadImage
          src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.userImage}`}
        />
      
        <UploadButton onClick={props.onClickUpload} type="button">
          <img src="../images/gallery.png"/>
        </UploadButton>
      {/* display: none */}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </ImgBox>
  );
}
