import CommunityCardPresenterPage from "./CommunityCard.presenter";

export default function CommunityCardContainerPage(props) {
  return <CommunityCardPresenterPage fetchBoardsData={props.el} />;
}
