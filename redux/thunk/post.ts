import { createPost, getPostDetails, getPosts  } from "../../services/post";
import { QueryParams } from "../shared";
import { postActions } from "../slices/post";
import { Dispatch } from "redux";




export interface GetPostParams extends QueryParams {
  id: number
}

export const handleGetPost =
  (param: GetPostParams) => async (dispatch: Dispatch) => {
    try {

      const data = await getPostDetails(param.id)

      // dispatch(postActions.getPostRequest(param));
      // const id = payload
      // const data = await getPostDetails(Number(param.id));
      console.log("recieved updatePost from axios", data);
      dispatch(postActions.getPostSuccess({ data: data }));
    } catch (error) {
      dispatch(postActions.getPostFailed(error.message));
    }
  };

  export const handleGetPosts =
  (param: QueryParams) => async (dispatch: Dispatch) => {
    try {
      const userId = 2

      const data = await getPosts()


      console.log("recieved updatePost from axios", data);
      dispatch(postActions.getPostSuccess({ data: data }));
    } catch (error) {
      dispatch(postActions.getPostFailed(error.message));
    }
  };

export interface CreatePostRequestParams extends QueryParams {
  title: string
  content: string
  name: string
}

export const handleCreatePost =
  (param: CreatePostRequestParams) => async (dispatch: Dispatch ,payload: typeof postActions) => {
    try {


      dispatch(postActions.createPostRequest(param));

      const data = await createPost(param.title, param.content, param.name);
      console.log("recieved createPost from axios", data);
      if(data){
        dispatch(postActions.createPostSuccess({ data: data }));

      }

    } catch (error) {
      dispatch(postActions.createPostFailed(error.message));
    }
  };