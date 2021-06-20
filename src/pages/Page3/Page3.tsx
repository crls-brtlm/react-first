import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  background-color: #c4c7c9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 700;
`;

interface IPage3Props {}

const Page3 = (props: IPage3Props) => {
  return (
    <StyledPage>
      <StyledTitle>Page 3</StyledTitle>
    </StyledPage>
  );
};

export default Page3;
