import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GlobalContext } from "../context/global.context";
import { useNavigate, Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import moment from "moment";

const ProfileCard = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/login");
  };

  if (!state?.isLoggedIn) {
    return (
      <div className="relative main-font flex items-center justify-center">
        <button
          onClick={() => navigate("/login")}
          className={`hover:text-yellow-300 hover:scale-105 transition-all duration-200${
            location.pathname === "/login" ? "text-yellow-300" : ""
          }`}
        >
          <div className="p-1 bg-yellow-300 text-black ">
            <IoIosLogIn size={30} />
          </div>
        </button>
      </div>
    );
  }
  return (
    <div className="relative main-font">
      <div
        className="p-1 rounded-full bg-yellow-300 text-black cursor-pointer hover:scale-105 transition-all duration-200"
        onClick={() => setOpen(!open)}
      >
        <CgProfile size={30} />
      </div>
      {open && (
        <div className="absolute top-[110%] right-0 bg-yellow-300 text-black z-50 shadow-md p-3 border border-yellow-400">
          <div className="leading-8">
            <p className="whitespace-nowrap">
              Full name: {state?.user?.fullname}
            </p>
            <p className="whitespace-nowrap">Email: {state?.user?.email}</p>
            <p className="whitespace-nowrap">
              Birthday: {moment(state?.user?.dob).format("DD-MM-YYYY") ?? "Unknown"}
            </p>
            <button
              className="bg-red-400 text-white px-4 py-1 hover:scale-105 transition-all duration-200 w-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
