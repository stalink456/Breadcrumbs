import React from "react";
import { useLocation, Link } from "react-router-dom";

interface IbreadcrumbNameMap {
  [key: string]: string;
}

const breadcrumbNameMap: IbreadcrumbNameMap = {
  current: "Текущая страница",
  "/": "Главная страница",
  secondPage: "Вторая страница",
  thirdPage: "Третья страница",
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation()
    .pathname.split("/")
    .filter((element) => element);

  return (
    <div>
      <Link to="/">Главная страница</Link>
      {location.length === 0 ? (
        <>
          <span>/</span>
          <span>{breadcrumbNameMap.current}</span>
        </>
      ) : (
        location.map((value, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? <span>/</span> : null}
            {index + 2 === location.length ? (
              <span>{breadcrumbNameMap[value]}</span>
            ) : (
              <Link to={`/${value}/${location[index + 1]}`}>
                {breadcrumbNameMap[value]}
              </Link>
            )}
          </React.Fragment>
        ))
      )}
    </div>
  );
};
