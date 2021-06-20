import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  background-color: #e4e7e9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 700;
`;

interface IPage2Props {}

const Page2 = (props: IPage2Props) => {
  return (
    <StyledPage>
      <StyledTitle>Page 2</StyledTitle>
    </StyledPage>
  );
};

export default Page2;
