import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

const Logo = ({ size }) => {
  return (
    <div className=" aspect-square rounded-full">
      <Link to={"/"}>
        <img
          src={LogoImg}
          alt=""
          className="object-contain"
          height={size}
          width={size}
        />
      </Link>
    </div>
  );
};

export default Logo;
