import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 15px;
  width: 300px;
  height: 342px;
  background: #fff;
`;
const Image = styled.img`
  width: 300px;
  height: 250px;
  object-fit: contain;
  background: #ffa230;
  border-radius: 20px;
`;
const WrapperHeader = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
const Box1 = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 18px;
`;
const Address = styled.div`
  font-size: 16px;
  color: #999;
`;
const UserName = styled.div`
  font-size: 14px;
`;
const Remarks = styled.div`
  font-size: 14px;
  color: #999;
`;
const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftBox = styled.div`
  display: flex;
`;
const LikeCount = styled.div``;
const ViewCount = styled.div``;
const RightBox = styled.div``;
const CreateAt = styled.div``;

export default function ListBox() {
  return (
    <Wrapper>
      <Image src="https://mp-seoul-image-production-s3.mangoplate.com/501882_1540343379669525.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"></Image>

      <WrapperHeader>
        <Box1>
          <Title>맛집 장소명</Title> <Address> | 위치명</Address>
        </Box1>
        <UserName>주혜 단짝남</UserName>
      </WrapperHeader>

      <Remarks>한 줄 리뷰</Remarks>

      <WrapperBottom>
        <LeftBox>
          <LikeCount>100</LikeCount>
          <ViewCount>100</ViewCount>
        </LeftBox>
        <RightBox>
          <CreateAt>2022.05.10</CreateAt>
        </RightBox>
      </WrapperBottom>
    </Wrapper>
  );
}
