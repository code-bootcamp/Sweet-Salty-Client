// import React, { useState, useEffect } from "react";

// TOAST UI Editor import
// import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
// 
import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
const UPLOAD_FILE = gql`
mutation uploadFile($file:Upload!){
  uploadFile(file:$file)
}`;
// 



function WriteToast() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // const [myblob,setMyblob] =useState([])
  
  const onUploadImage = async (blob, callback) => {
    // console.log(blob);

    // myblob.push(blob)
    const url = await uploadFile({
      variables: { file: blob },
    });
    const urldata = url?.data.uploadFile
    // console.log(data2,"데이타2")
    // console.log(url,"유알엘")
    // console.log(urldata)
   const result = "https://storage.googleapis.com/"+urldata
  //  console.log(result)
   callback(result,"");
    // return false;
  };
  return (
    <>
      <Editor previewStyle="tab" initialEditType="wysiwyg" initialValue="사진을 드래그&드롭 해보세요." usageStatistics={false}
      hooks={{          
        addImageBlobHook: onUploadImage        
      }}
      toolbarItems={ [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote'], ['ul', 'ol', ], ['table', 'image', 'link']]}
       />
    </>
  );
}

export default WriteToast;
