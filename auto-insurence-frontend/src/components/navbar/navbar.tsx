import "./navbar.scss";
import { Link } from "react-router-dom";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";
import { ThemeContext } from "../../context/theme.context";
import { useContext, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/Cars", label: "Cars" },
  { href: "/CarOwners", label: "Car Owners" },
];

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [open, setOpen] = useState<boolean>(false);

  const ToggleOpenMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuStyles = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">
        <span>Car insurence</span>
      </div>
      <div className={menuStyles}>
        <ul>
          {links.map((item) => (
            <li key={item.href} onClick={ToggleOpenMenu}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger">
        <Menu onClick={ToggleOpenMenu} />
      </div>
      <div className="toggle">
        <ToggleButton
          value={"check"}
          selected={darkMode}
          onChange={toggleDarkMode}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </ToggleButton>
      </div>
    </div>
  );
};

export default Navbar;
