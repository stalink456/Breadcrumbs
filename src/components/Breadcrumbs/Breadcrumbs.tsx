import React from "react";
import { useLocation, Link, matchPath, RouteProps } from "react-router-dom";

interface IbreadcrumbNameMap {
  [key: string]: string;
}

const breadcrumbNameMap: IbreadcrumbNameMap = {
  "/": "Главная страница",
  "/secondPage/:second": "Вторая страница",
  "/secondPage/:userId/thirdPage/:groupId": "Третья страница",
};

export const Breadcrumbs: React.FC = () => {
  return (
    <div>
      <Link to="/">Главная страница</Link>
    </div>
  );
};
