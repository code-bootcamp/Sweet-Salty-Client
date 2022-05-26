import * as S from "./Store.styled";
import TopButton from "../../../commons/topbutton";
import StoreItemContainerPage from "../../../commons/card/StoreCard/StoreItem.container";
import { v4 as uuidv4 } from "uuid";
import BestStoreItemContainerPage from "../../../commons/card/BestStoreCard/BestStoreItem.container";
import InfiniteScroll from "react-infinite-scroller";
import StoreSearchBarContainerPage from "../../../commons/shopSearchBar/shopSearchBar.container";
import StoreSearchItemContainerPage from "../../../commons/card/StoreSearchCard/StoreSearchItem.container";

export default function ShopPresenterPage(props) {
  const dataForSellerSearch = props.sellerSearchData?.fetchShopSeller.hits.hits;
  const dataForTitleSearch = props.titleSearchData?.fetchShopTitles.hits.hits;
  console.log("프롭스", props.shopListData?.fetchShops);
  console.log("프롭스 seller", dataForSellerSearch);
  console.log("프롭스 title", dataForTitleSearch);
  return (
    //   전체페이지
    <S.Page>
      {/* 메인 */}
      <S.Main>
        {/* 타이틀 */}
        <S.TitleSection>단짝 스토어</S.TitleSection>
        {/* 검색바 */}
        <S.SearchSection>
          <StoreSearchBarContainerPage
            setSellerSearch={props.setSellerSearch}
            setTitleSearch={props.setTitleSearch}
          />
        </S.SearchSection>
        {/* 내용 */}
        <S.ContentsSection>
          {/* 베스트게시글 */}
          <S.BestContentsSection>
            {/* 베스트게시글타이틀 */}
            <S.BestContentsTitleArticle>
              <S.BestContentsTitleTop>실시간</S.BestContentsTitleTop>
              <S.BestContentsTitleBottom>TOP 3</S.BestContentsTitleBottom>
            </S.BestContentsTitleArticle>
            {/* 베스트게시글 */}
            <BestStoreItemContainerPage />
          </S.BestContentsSection>
          {/* 메인게시글 */}
          {!props.sellerSearch.length && !props.titleSearch.length ? (
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.shopListDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.StoreContentsSection>
                  {props.shopListData?.fetchShops.map((el: any) => (
                    <StoreItemContainerPage
                      el={el}
                      key={uuidv4()}
                      id={el.shopId}
                    />
                  ))}
                </S.StoreContentsSection>
              </InfiniteScroll>
            </div>
          ) : props.sellerSearch.length ? (
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.sellerSearchDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.StoreContentsSection>
                  {dataForSellerSearch?.map((el: any) => (
                    <StoreSearchItemContainerPage
                      el={el._source}
                      key={uuidv4()}
                      id={el._id}
                    />
                  ))}
                </S.StoreContentsSection>
              </InfiniteScroll>
            </div>
          ) : (
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.titleSearchDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.StoreContentsSection>
                  {dataForTitleSearch?.map((el: any) => (
                    <StoreSearchItemContainerPage
                      el={el._source}
                      key={uuidv4()}
                      id={el._id}
                    />
                  ))}
                </S.StoreContentsSection>
              </InfiniteScroll>
            </div>
          )}
        </S.ContentsSection>
        {/* 위로가기 버튼 */}
        <S.UpBtnSection>
          <TopButton />
        </S.UpBtnSection>
      </S.Main>
    </S.Page>
  );
}
