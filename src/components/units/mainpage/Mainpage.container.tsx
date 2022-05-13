import { useQuery } from "@apollo/client";
import MainpageUI from "./MainPage.presenter";
import { FETCH_BOARDS } from "./Mainpage.queries";

export default function Mainpage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  return <MainpageUI />;
}
