import { apiTypicode } from "../apiTypicode";
import { IPostResponse } from "./apiGetPost";

const apiListPosts = async () => {
  let res = await apiTypicode.get<IPostResponse[]>(`posts`);

  return res.data;
};

export { apiListPosts };
