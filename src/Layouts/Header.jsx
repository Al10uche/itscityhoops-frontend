import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import ProfileCard from "../components/ProfileCard";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className={`${
        location.pathname === "/" ? "bg-main" : "bg-black"
      } w-full flex justify-between items-center px-10 py-2  main-font`}
    >
      <Logo size={55} />
      <nav className="flex items-center justify-center gap-5 font-bold">
        <div>
          <Link
            to={"/"}
            className={`hover:text-yellow-300 ${
              location.pathname === "/" ? "text-yellow-300" : ""
            }`}
          >
            Home
          </Link>
        </div>
        {/* <div>
          <Link
            to={"/search"}
            className={`hover:text-yellow-300 ${
              location.pathname === "/search" ? "text-yellow-300" : ""
            }`}
          >
            Look for games
          </Link>
        </div> */}
        <div>
          <Link
            to={"/about"}
            className={`hover:text-yellow-300 ${
              location.pathname === "/about" ? "text-yellow-300" : ""
            }`}
          >
            About us
          </Link>
        </div>
        {/* <div>
          <Link
            to={"/merch"}
            className={`hover:text-yellow-300 ${
              location.pathname === "/merch" ? "text-yellow-300" : ""
            }`}
          >
            Merch
          </Link>
        </div> */}
        <div>
          <button
            onClick={() => navigate("/search")}
            className="bg-yellow-300 text-black px-4 py-2 hover:scale-105 transition-all duration-200"
          >
            Play now
          </button>
        </div>

        <ProfileCard />
      </nav>
    </header>
  );
};

export default Header;
