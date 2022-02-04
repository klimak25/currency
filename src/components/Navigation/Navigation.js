import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import Button from "@mui/material/Button";

function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation">
      <Button>
        <Link
          className="navigation__link"
          to={location.pathname === "/" ? "/currency" : "/"}
        >
          {location.pathname === "/" ? "Курсы валют" : "Конвертер валют"}
        </Link>
      </Button>
    </div>
  );
}
export default Navigation;
