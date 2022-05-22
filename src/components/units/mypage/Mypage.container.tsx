// mypage Container --- 김치훈

import { useRouter } from "next/router";
import MyPagePresenterPage from "./Mypage.presenter";

export default function MyPageContainerPage() {
  const router = useRouter()

  const onClickModify = () =>{
    router.push("/mypage/infomodify")
  }

  return <MyPagePresenterPage 
  onClickModify={onClickModify}
  />;
}
