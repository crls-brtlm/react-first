import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoCard from "./TodoCard";
import { ITodoResponse } from "../../api/todo/apiGetTodo";

const todoSample: ITodoResponse = {
  id: 1,
  completed: false,
  title: "Test todo",
  userId: 1,
};

describe("TodoCard component", () => {
  let titleElement: HTMLElement;
  beforeEach(() => {
    render(<TodoCard todo={todoSample} />);
    titleElement = screen.getByText(/Test todo/i);
  });
  it("renders title", () => {
    expect(titleElement).toBeInTheDocument();
  });
});
