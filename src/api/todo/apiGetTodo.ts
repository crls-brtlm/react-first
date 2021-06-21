import { apiTypicode } from "../apiTypicode";

export interface ITodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiGetTodo = async (todoId: number) => {
  let res = await apiTypicode.get<ITodoResponse>(`todo/${todoId}`);

  return res.data;
};

export { apiGetTodo };
