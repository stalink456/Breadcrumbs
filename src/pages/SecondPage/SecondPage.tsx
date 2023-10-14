import React from "react";
import { Link } from "react-router-dom";

export const SecondPage: React.FC = () => {
  return (
    <>
      <h1>Вторая страница</h1>
      <Link to="thirdPage/1">Третья страница</Link>
    </>
  );
};
