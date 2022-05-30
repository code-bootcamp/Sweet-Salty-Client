import ProfileInfoPresenter from "./profileInfo.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COUNT,
  FOLLOW,
  FOLLOW_COUNT,
} from "./profileInfo.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProfileInfoContainer(props: any) {
  const [isFollow, setIsFollow] = useState(true)
  console.log(isFollow)

  const router = useRouter();
  
  const { data: followCountData } = useQuery(FOLLOW_COUNT, {
    variables: {
      followerNickname: String(props.data?.fetchUser?.userNickname),
    },
  });

  const [follow] = useMutation(FOLLOW)


  const { data: fetchBoardCountData } = useQuery(FETCH_BOARD_COUNT);

  const onClickMessageWrite = () => {
    router.push("/message/write");
  };

  const onClickFollow = async () => {
    try{
      const result = await follow({
        variables: {
          followerNickname: "뚜루뚜"
        },
        refetchQueries: [
          {
            query: FOLLOW_COUNT,
            variables: { followerNickname: String(props.data?.fetchUser?.userNickname) },
          },
        ],
      })
      if(result.data.follow === "팔로우"){return setIsFollow(false)} else if (result.data.follow === "언팔로우"){return setIsFollow(true)}
      
    }
    catch(error: any){
      alert(error.message)
    }
  }

  return (
    <ProfileInfoPresenter
      data={props.data}
      isFollow={isFollow}
      followCountData={followCountData}
      fetchBoardCountData={fetchBoardCountData}
      onClickMessageWrite={onClickMessageWrite}
      onClickFollow={onClickFollow}
    />
  );
}
