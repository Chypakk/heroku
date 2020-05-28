import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Nav = () => (
  <div className="container">
    <nav>
      <Link to="/">Главная страница</Link>
      <Link to="/sign-in" className="Link">
        Авторизация
      </Link>
      <Link to="/profile" className="Link">
        Старница пользователя
      </Link>

      <Button
        label="Удалить профиль"
        click={() => {
          localStorage.clear();
          window.location.reload();
        }}
      />
    </nav>
  </div>
);

export default Nav;
