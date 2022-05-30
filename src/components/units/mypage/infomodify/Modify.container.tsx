import { useRouter } from "next/router";
import ModifyPresenterPage from "./Modify.presenter";

export default function ModifyContainerPage() {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return <ModifyPresenterPage onClickBack={onClickBack} />;
}
