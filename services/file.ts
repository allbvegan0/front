
import axios from "axios";
import { baseUrl, setHeader } from "./setHeader";

export const uploadFile = async (file: any) => {
  console.log("Start file upload", file);
  const formData = new FormData()
  const map ={
    "0":["variables.file.file"]
  }
  formData.append("map", JSON.stringify(map))
  // formData.append("1",file)
  formData.append("0", file)
  const extension = file.type.split('/')[1];
  const imageFile = new File([file], `${Date.now()}.${extension}`, {
    type: file.type,
});
formData.append('image', imageFile);
  // console.log('---t', axios.post(baseUrl,{query:``} ,{headers: await setUploadHeader()}))
  return await axios
    .post(
      baseUrl,

      {
        query: `
      mutation singleUpload($file: Upload!) {
        singleUpload(file: $file) 
          url
        }
      }
    `,
        variables:  file,
        operations:"variables",
        map: {"0":["variables.file"]},
        // 1: (binary)
      },
      {
        headers: await setHeader(),
        // headers.append()
      },
    )
    .then((data) => {
      console.log(data.data.data.singleUpload);
      return data.data.data.singleUpload;
    })
    .catch((error) => {
      console.log(error);
      
    });
};

export const uploadToS3 = async(data:any)=>{
  const {file, signedRequest} = data

    const options = {
      headers: {
        "Content-Type": file.type
      }
    };
    console.log('reached waiting')
    const res = await axios.put(signedRequest, file, options);
    console.log('frrom s3',res.data)

    return res.data


} 