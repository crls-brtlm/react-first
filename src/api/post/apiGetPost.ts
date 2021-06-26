import { apiTypicode } from "../apiTypicode";

export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const apiGetPost = async (postId: number) => {
  let res = await apiTypicode.get<IPostResponse>(`posts/${postId}`);

  return res.data;
};

export { apiGetPost };
