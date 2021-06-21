import { render, screen } from "@testing-library/react";
import { ITodoResponse } from "../../api/todo/apiGetTodo";
import TodosPage from "./TodosPage";

const todosSample: ITodoResponse[] = [
  {
    id: 1,
    completed: false,
    title: "Test todo",
    userId: 1,
  },
];

describe("Todos page", () => {
  it("renders MainPage", () => {
    render(<TodosPage todos={[]} isLoading={false} isError={false} />);
    const alertElement = screen.getByText(/Page 2/i);
    expect(alertElement).toBeInTheDocument();
  });

  it("renders loading spinner when loading", () => {
    render(<TodosPage todos={[]} isLoading isError={false} />);
    const spinnerElement = screen.getByTestId(/loading-spinner/i);
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders error warning when error", () => {
    render(<TodosPage todos={[]} isLoading={false} isError />);
    const errorElement = screen.getByText(/There was an error loading API/i);
    expect(errorElement).toBeInTheDocument();
  });

  it("renders todo list", () => {
    render(<TodosPage todos={todosSample} isLoading={false} isError={false} />);
    const todoElement = screen.getByText(/Test todo/i);
    expect(todoElement).toBeInTheDocument();
  });
});
