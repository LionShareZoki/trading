import React from "react";
import Logo from "../../LionShare_logo.png";
import "./Header.css";
import Button from "./Button";

function Header(props) {
  return (
    <div className="header__wrapper">
      {/* Logo */}
      <div className="header__logo">
        <img src={Logo} width={45} />
      </div>
      {/* Search */}
      <div className="header__search">
        <div className="search__container">
          <Button />
          <input
            onSubmit={props.onSubmitHandler}
            className="input"
            placeholder="Search"
            type="text"
          ></input>
        </div>
      </div>
      {/* Menu Items */}
      <div className="header__menuItems">
        <a href="#">Free stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
