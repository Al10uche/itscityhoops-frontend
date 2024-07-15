import { Link } from "react-router-dom";
import Basket from "../assets/basket.jpeg";
import { useState } from "react";
import { register } from "../actions/auth";
import { PiSpinnerBallThin } from "react-icons/pi";
import DatePicker from "react-datepicker";
import moment from "moment";

const RegisterPage = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formErrors = validate(form);

    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    try {
      setLoading(true);
      const response = await register(
        form.email,
        form.password,
        form.fullname,
        form.dob,
        form.gender
      );
      if (response.status === 201) {
        window.location.href = "/login";
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
    if (form.fullname == "" || !form.fullname) {
      errors.message = "Please enter your full name.";
      return errors;
    }

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

    if (form.confirmPassword === "") {
      errors.message = "Please confirm your password.";
      return errors;
    }

    if (form.password !== form.confirmPassword) {
      errors.message = "Passwords do not match.";
      return errors;
    }

    if (form.gender == "" || !form.gender) {
      errors.message = "Please select your gender.";
      return errors;
    }

    // if (form.dob == "" || !form.dob) {
    //   errors.message = "Please select your date of birth.";
    //   return errors;
    // }
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
          className="flex flex-col gap-10 w-full max-w-md "
          onSubmit={handleRegister}
        >
          <div className="flex flex-col gap-10 ">
            <div className="flex justify-between items-center">
              <label
                htmlFor="fullname"
                className="text-2xl main-font text-yellow-300"
              >
                Full name:
              </label>
              <input
                type="text"
                id="fullname"
                className="bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 text-black main-font  outline-none text-lg py-2 px-7 "
                placeholder="Enter your full name"
                value={form.fullname}
                onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              />
            </div>
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
            <div className="flex justify-between items-center">
              <label
                htmlFor="confirm-password"
                className="text-2xl main-font text-yellow-300"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                className=" bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 "
                placeholder="Enter password again"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="gender"
                className="text-2xl main-font text-yellow-300"
              >
                Gender:
              </label>
              <div className="flex gap-2 main-font">
                <div className="flex items-center justify-center gap-2 border-2 border-yellow-300 px-2 py-1 rounded-full">
                  <label
                    htmlFor="male"
                    className="text-white w-full h-full cursor-pointer"
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="w-5 h-5 accent-yellow-300 rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 "
                    value={"male"}
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                  />
                </div>
                <div className="flex items-center justify-center gap-2 border-2 border-yellow-300 px-2 py-1 rounded-full">
                  <label
                    htmlFor="female"
                    className="text-white w-full h-full cursor-pointer"
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="w-5 h-5 rounded-full focus:border-4 accent-yellow-300 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 "
                    value={"female"}
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="age"
                className="text-2xl main-font text-yellow-300"
              >
                Date of Birth:
              </label>
              <DatePicker
                placeholderText="Enter your date of birth"
                value={form.dob}
                selected={form.dob}
                className=" bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 z-50 "
                onChange={(date) => setForm({ ...form, dob: moment(date).format("YYYY-MM-DD") })}
              />
            </div>
          </div>
          <button
            className="bg-yellow-300 text-black w-full py-2 main-font font-bold text-xl hover:scale-[1.05] transition-all"
            type="submit"
          >
            {loading ? (
              <PiSpinnerBallThin size={24} className="animate-spin" />
            ) : (
              "Sign up"
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
            <Link
              className={`text-3xl secondary-font hover:scale-[1.08] transition-all text-yellow-300`}
              to={"/login"}
            >
              Login
            </Link>
            <span>/</span>
            <span className={`text-3xl secondary-font`} to={"/register"}>
              Register
            </span>
          </div>
        </div>
      </div>
      <div className="flex-[60%]">
        <div className="h-full">
          <img src={Basket} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
