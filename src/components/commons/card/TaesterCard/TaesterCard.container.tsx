import TasterCardPresenterPage from "./TaesterCard.presenter";

export default function TasterCardContainerPage(props) {
  return <TasterCardPresenterPage fetchBoardsCategoryData={props.el} />;
}
