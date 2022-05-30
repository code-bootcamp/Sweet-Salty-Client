import { useRouter } from "next/router";
import WishWritePresenter from "./WishWrite.presenter";

export default function WishWriteContainer() {
  const router = useRouter();

  const onClickWishDetail = () => {
    alert("가주세요! 등록되었습니다.");
    router.push("/reviews/wish/detail");
  };
  const onClickBack = () => {
    router.back();
  };

  return (
    <WishWritePresenter
      onClickWishDetail={onClickWishDetail}
      onClickBack={onClickBack}
    />
  );
}
