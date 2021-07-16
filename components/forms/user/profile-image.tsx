// title
// content
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { UploadFile} from "../../molecules/input/fileUploadInput";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { handleUploadFile } from "../../../redux/thunk/file";



interface IFormInput {
  file: File;
}

const schema = yup.object().shape({
  title: yup.object().required(),
});

export const UPLOAD_SINGLE_FILE = gql`
  mutation uploadFile($file: Upload!) {
    singleUpload(file: $file) {
      url
      signedRequest
    }
  }
`;

export const ImageUploadForm = (user) => {
  const [file, chooseFile] = React.useState(null);
  // const [uploaded, sU] = useState(false)
  const [mutate, { loading, error }] = useMutation(UPLOAD_SINGLE_FILE);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let mount = true;
    if (mount) {
      if (file) {
        console.log(file);
        // _file: URL.createObjectURL(event.target.files[0])
      }
    }
    return () => {
      mount = false;
    };
  }, [file]);

  const upload = (data: any) => {
    const file = data.image[0];
    console.log("start from frnt", file);
    mutate({
      variables: { file },
    })
      .then((v: any) => {
        console.log("r", v);

        const signedRequest = v.data.singleUpload.signedRequest;
        const url = v.data.singleUpload.url;
        dispatch(handleUploadFile({ file, signedRequest, url }));
        // sU(true)
        if (url) {
          chooseFile(null);
        }
      })
      .catch((e) => {
        console.log("Error on mutation----->", e);
        // sU(false)
        // return false
      });
  };

  const { register, handleSubmit } = useForm();
  const ref = React.useRef(null);
  return (
    <form id="img" onSubmit={handleSubmit(upload)}>
      <Input
        required
        {...register("image", { required: true })}
        name="image"
        type="file"
        accept=".jpg,.png"
        onChange={(e) => {
          chooseFile(e.target.files[0]);
        }}
      />
      {file ? (
        <div>
          <img src={URL.createObjectURL(file)} id="img" />
          <p>Filename: {file.name}</p>
          <p>Filetype: {file.type}</p>
          <p>Size in bytes: {file.size}</p>
          <p>lastModifiedDate: {file.lastModifiedDate.toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <Button type="submit">Change Profile Picture</Button>
    </form>
  );
};

