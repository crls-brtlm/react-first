import { apiTypicode } from "../apiTypicode";
import { ITodoResponse } from "./apiGetTodo";

const apiListTodos = async () => {
  let res = await apiTypicode.get<ITodoResponse[]>(`todos`);

  return res.data;
};

export { apiListTodos };
