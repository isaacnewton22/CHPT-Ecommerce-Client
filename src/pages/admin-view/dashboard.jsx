import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [imgDataList, setImgDataList] = useState([]);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  console.log("featureImageList", featureImageList);

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  useEffect(() => {
    featureImageList.map((featureImage) => {
      axios.get( `${import.meta.env.VITE_BASE_URL}/api/admin/image/download/${featureImage?.image}` ).then((response) => {
        // console.log("img response.data: " , response.data.data);
        setImgDataList((prevImgData) => [...prevImgData, `data:image/*;base64,${response.data.data}`])
      })

    })
  }, [featureImageList]);

  // useEffect(() => {
  //   console.log("imgDataList : ", imgDataList)
  // }, [imgDataList]);

  return (
    <div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
        // isEditMode={currentEditedId !== null}
      />
      <Button onClick={handleUploadFeatureImage} disabled={imageFile==null} className="mt-5 w-full  bg-blue-950 hover:bg-blue-600">
        Upload
      </Button>
      <div className="flex flex-col gap-4 mt-5">
        {imgDataList && imgDataList.length > 0
          ? imgDataList.map((featureImgItem, index) => (
             
              <div className="relative" key={index}>
                <img src={featureImgItem} className="w-full h-[300px] object-cover rounded-t-lg" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default AdminDashboard;
