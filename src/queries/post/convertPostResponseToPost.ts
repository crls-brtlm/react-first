import { IPostResponse } from "../../api/post/apiGetPost";
import { TPost } from "./post";

export const convertPostResponseToPost = (
  postResponse: IPostResponse
): TPost => {
  return {
    ...postResponse,
  };
};
