import { Link, redirect, useNavigate, useSearchParams } from "react-router-dom";
import Basket from "../assets/basket.jpeg";
import { useContext, useEffect, useState } from "react";
import { login } from "../actions/auth";
import { PiSpinnerBallThin } from "react-icons/pi";
import { GlobalContext } from "../context/global.context";

const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useContext(GlobalContext);

  const [searchParams, _] = useSearchParams();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formErrors = validate(form);

    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    try {
      setLoading(true);
      const response = await login(form.email, form.password);


      if (response.status === 200) {
        dispatch({ type: "LOGIN", payload: response.data.user });
        localStorage.setItem("token", response.data.token);

        navigate("/search");
      } else {
        setErrors({ message: response.data.message });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const validate = (form) => {
    let errors = {};
    if (form.email == "" || !form.email) {
      errors.message = "Please enter your email.";
      return errors;
    }

    // validate email format
    if (!form.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      errors.message = "Email is not valid.";
      return errors;
    }
    if (form.password === "") {
      errors.message = "Please enter your password.";
      return errors;
    }

    // password should be at least 8 characters long
    if (form.password.length < 8) {
      errors.message = "Password should be at least 8 characters long";
      return errors;
    }

    return errors;
  };

  return (
    <section className="flex flex-col md:flex-row  ">
      <div className="flex-[40%] flex flex-col justify-between items-center  gap-10 w-full pb-1">
        <div>
          <h2 className="text-[92px] secondary-font text-center text-yellow-300">
            <span className="block">Be A </span>
            <span>Hooper</span>
          </h2>
        </div>
        <form
          className="flex flex-col gap-10 w-full max-w-md"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col gap-10 ">
            <div className="flex justify-between items-center">
              <label
                htmlFor="email"
                className="text-2xl main-font text-yellow-300"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 text-black main-font  outline-none text-lg py-2 px-7 "
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-2xl main-font text-yellow-300"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className=" bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 "
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>
          <button
            className="bg-yellow-300 text-black w-full py-2 main-font font-bold text-xl hover:scale-[1.05] transition-all flex items-center justify-center"
            type="submit"
          >
            {loading ? (
              <PiSpinnerBallThin size={24} className="animate-spin" />
            ) : (
              "Sign in"
            )}
          </button>
          {errors.message && (
            <div className="bg-red-900 main-font text-white px-4 py-2 rounded-full text-center w-full">
              {errors.message}
            </div>
          )}
        </form>

        <div className="relative w-full">
          <div className="absolute py-1 bg-yellow-300 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex gap-2 bg-black w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
            <span className={`text-3xl secondary-font`}>Login</span>
            <span>/</span>
            <Link
              className={`text-3xl secondary-font hover:scale-[1.08] transition-all text-yellow-300`}
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-[60%]">
        <div className="h-[90vh]">
          <img src={Basket} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
