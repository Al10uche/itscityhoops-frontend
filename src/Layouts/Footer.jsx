import Logo from "../components/common/Logo";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-around items-center px-10 py-10 relative bottom-0 w-full main-font">
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center gap-14 justify-center">
          <Link
            to={"/about"}
            className="text-xl font-bold hover:text-yellow-300 hover:scale-[1.08] transition-all duration-200"
          >
            About us
          </Link>
          <Link
            to={"/contact"}
            className="text-xl font-bold hover:text-yellow-300 hover:scale-[1.08] transition-all duration-200"
          >
            Contact us
          </Link>
          <Link className="text-xl font-bold hover:text-yellow-300 hover:scale-[1.08] transition-all duration-200">
            Products
          </Link>
        </div>
      </div>
      <Logo size={130} />
      <div>
        <div className="flex gap-3 items-center justify-center">
          <span className="rounded-full bg-yellow-300 block p-2 aspect-square text-black hover:scale-105 transition-all duration-200 hover:text-blue-700">
            <FaFacebookF size={25} />
          </span>
          <span className="rounded-full bg-yellow-300 block p-2 aspect-square text-black hover:scale-105 transition-all duration-200 hover:text-fuchsia-900">
            <FaInstagram size={25} />
          </span>
          <span className="rounded-full bg-yellow-300 block p-2 aspect-square text-black hover:scale-105 transition-all duration-200 hover:text-red-600">
            <FaYoutube size={25} />
          </span>
          <span className="font-bold text-white text-2xl">/ItsCityHoops</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
