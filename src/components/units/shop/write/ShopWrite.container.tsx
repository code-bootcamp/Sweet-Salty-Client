import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ShopWritePresenterPage from "./ShopWrite.presenter";
import { CREATE_SHOP, UPLOAD_FILE } from "./ShopWrite.queries";

export default function ShopWriteContainerPage() {
  const router = useRouter();
  const [createShop] = useMutation(CREATE_SHOP);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [address, setAddress] = useState();

  const { register, handleSubmit, setValue, getValues, reset } = useForm({
    mode: "onChange",
  });
  const [fileUrls, setFileUrls] = useState();

  const onClickSubmit = async (data) => {
    try {
      const result = await createShop({
        variables: {
          createShopInput: {
            shopProductName: data.menu,
            shopSeller: data.seller,
            shopDisCount: Number(data.discount),
            shopDisCountPrice: Number(data.discountPrice),
            shopOriginalPrice: Number(data.originalPrice),
            shopDescription: data.description,
            shopStock: Number(data.stock),
            thumbnail: String(fileUrls),
            shopUrl: data.pageUrl,
            place: {
              placeName: address.place_name,
              placeAddress: address.road_address_name,
              placeUrl: address.place_url,
              lat: address.x,
              lng: address.y,
            },
          },
        },
      });
      router.push("/shop");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const result = await uploadFile({ variables: { file } });
      console.log("시발련", result);
      const urldata = `https://storage.googleapis.com/${result?.data.uploadFile}`;
      setFileUrls(urldata);
    } catch (error: any) {
      alert(error.message);
    }
  };

  console.log("file", typeof fileUrls);

  return (
    <ShopWritePresenterPage
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onChangeFile={onChangeFile}
      setAddress={setAddress}
    />
  );
}
