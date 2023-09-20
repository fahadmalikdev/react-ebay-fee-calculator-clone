import "./MainMenu.css";
import React from "react";
import menuItems from "./MenuItems";

const MainMenu = () => {
  
  const renderSubMenuItems = (dropdownArr) => {
    return dropdownArr.map((submenu, submenuIndex) => (
      <li key={submenuIndex}>
        <a className="dropdown-item" href={submenu.href}>
          {submenu.title}
        </a>
      </li>
    ));
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      if (item.isDropDown && item.isMenuImage) {
        return (
          <li className="nav-item flag-svg-logo" key={index}>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id={`dropdownMenuButton${index}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={item.menuImagePath}
                  width={25}
                  height={25}
                  alt="Flag"
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby={`dropdownMenuButton${index}`}
              >
                {renderSubMenuItems(item.dropdownArr)}
              </ul>
            </div>
          </li>
        );
      } else if (!item.isDropDown && !item.isMenuImage) {
        return (
          <li className="nav-item flag-svg-logo" key={index}>
            <a className="btn btn-secondary" href={item.href}>
              {item.menuHeading}
            </a>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">{renderMenuItems()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
