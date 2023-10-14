import React from "react";
import { Link } from "react-router-dom";

export const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="secondPage/1">Вторая страница</Link>
    </div>
  );
};
