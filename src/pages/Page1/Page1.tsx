import { Tooltip } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import Counter from "../../components/Counter";

interface IPage1Props {}

const Page1 = (props: IPage1Props) => {
  return (
    <main className="App-header">
      <Tooltip title="You are over an alert">
        <Alert severity="warning">This is just a Material UI test alert</Alert>
      </Tooltip>
      <div>
        <Counter />
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </main>
  );
};

export default Page1;
