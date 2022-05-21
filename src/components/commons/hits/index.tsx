import styled from "@emotion/styled";

export const ViewCount = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: default;
`;
export const ViewIcon = styled.img`
  margin-right: 2px;
  width: 24px;
`;

export default function Hits() {
  return (
    <ViewCount>
      <ViewIcon src={"/images/viewCount.png"} />
      100
    </ViewCount>
  );
}
