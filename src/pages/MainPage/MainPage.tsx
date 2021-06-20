import React from "react";
import { Redirect } from "react-router-dom";
import { ROUTE_PAGE_1 } from "../../constants/routes";

interface IMainPageProps {}

const MainPage = (props: IMainPageProps) => {
  return <Redirect to={ROUTE_PAGE_1} />;
};

export default MainPage;
