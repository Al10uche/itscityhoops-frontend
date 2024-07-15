import SelectList from "../components/shared/Select";
import governoratesOfTunisia from "../constants/governoratesOfTunisia";
import DatePicker from "react-datepicker";
import { useContext, useEffect, useState } from "react";
import { submitGame } from "../actions/users";
import { GlobalContext } from "../context/global.context";
import { PiSpinnerBallThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const LookForGames = () => {
  const [form, setForm] = useState({
    type: "",
    region: "",
    date: "",
    numberOfPlayers: 0,
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [state, dispatch] = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSubmitGameSearch = async (e) => {
    e.preventDefault();
    const formErrors = validate(form);

    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    if (!state.isLoggedIn && !state?.user?.id) {
      setOpen(true);
      return;
    }

    try {
      setLoading(true);
      const response = await submitGame(state.user.id, form);
      console.log(response);
      if (response.status === 201) {
        setForm({
          type: "",
          region: "",
          date: "",
          numberOfPlayers: 0,
          comments: "",
        });
        console.log("Game submitted successfully");
        localStorage.setItem("searching", true);
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const validate = (form) => {
    let errors = {};
    if (!form.type) {
      errors.message = "Type is required";
      return errors;
    }
    if (!form.region) {
      errors.message = "Region is required";
      return errors;
    }
    if (!form.date) {
      errors.message = "Date is required";
      return errors;
    }
    if (!form.numberOfPlayers) {
      errors.message = "Number of players is required";
      return errors;
    }
    if (parseInt(form.numberOfPlayers) > 6) {
      errors.message = "Number of players should be less than 6";
      return errors;
    }
    return errors;
  };

  useEffect(() => {
    if (state.pendingGameForm) {
      setForm(state.pendingGameForm);
    }
  }, []);

  const handleRedirectToLogin = () => {
    dispatch({ type: "PENDING_GAME_FORM", payload: form });
    navigate({
      pathname: "/login",
      search: `?redirect=${window.location.pathname}`,
    });
  };

  return (
    <section className="relative">
      {open && (
        <div className="fixed z-[99] top-0 left-0 right-0 bottom-0 backdrop-blur ">
          <div className="fixed z-[999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-yellow-300 text-black h-fit flex flex-col">
            <div className="h-full flex flex-col items-center justify-center gap-5">
              <div className="text-center text-3xl main-font">
                Please sign in first
              </div>
              <div className="flex gap-5 items-center justify-center w-full">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-black text-white w-full py-2 main-font font-bold text-xl hover:scale-[1.05] transition-all"
                >
                  Close
                </button>
                <button
                  onClick={handleRedirectToLogin}
                  className="bg-black text-white w-full py-2 main-font font-bold text-xl hover:scale-[1.05] transition-all"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form
        action="POST"
        className="flex flex-col md:flex-row h-full main-font uppercase relative"
        onSubmit={handleSubmitGameSearch}
      >
        <div className="flex-1 flex flex-col items-center justify-center p-10 gap-10">
          <div className="flex items-center justify-center  flex-col w-full h-full gap-2">
            <p className="block text-3xl main-font font-bold text-yellow-300">
              Type:
            </p>
            <div className="flex gap-5 main-font">
              <div className="flex items-center justify-center gap-2 border-2 border-yellow-300 px-2 py-1 rounded-full">
                <label
                  htmlFor="player"
                  className="text-white w-full h-full cursor-pointer"
                >
                  Player
                </label>
                <input
                  type="radio"
                  name="type"
                  id="player"
                  className="w-5 h-5 accent-yellow-300 rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 "
                  value={"player"}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                />
              </div>
              <div className="flex items-center justify-center gap-2 border-2 border-yellow-300 px-2 py-1 rounded-full">
                <label
                  htmlFor="organizer"
                  className="text-white w-full h-full cursor-pointer"
                >
                  Organizer
                </label>
                <input
                  type="radio"
                  name="type"
                  id="organizer"
                  className="w-5 h-5 rounded-full focus:border-4 accent-yellow-300 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 "
                  value={"organizer"}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  flex-col w-full h-full">
            <p className="block text-3xl main-font font-bold text-yellow-300">
              Region:
            </p>
            <SelectList
              options={governoratesOfTunisia}
              value={form.region}
              placeholder={"Select your region"}
              className="w-1/2"
              onChange={(value) =>
                setForm({
                  ...form,
                  region: value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-center  flex-col w-full h-full">
            <p className="block text-3xl main-font font-bold text-yellow-300">
              Date and Time:
            </p>
            <DatePicker
              placeholderText="Select Date"
              value={form.date}
              selected={form.date}
              dateFormat={"dd-mm-yyyy HH:mm"}
              showTimeSelect
              wrapperClassName="w-1/2"
              className=" bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 main-font text-black outline-none text-lg py-2 px-7 z-50  w-full"
              onChange={(date) => setForm({ ...form, date: date })}
            />
          </div>
        </div>
        <div className="flex-1 bg-yellow-300 text-black">
          <div className="flex flex-col gap-10 p-10">
            <div className="flex items-center justify-between">
              <span className="text-3xl main-font font-bold text-black">
                # Of players
              </span>
              <input
                type="number"
                value={form.numberOfPlayers}
                placeholder="e.g: 1"
                onChange={(e) =>
                  setForm({
                    ...form,
                    numberOfPlayers: e.target.value,
                  })
                }
                className="bg-white rounded-full focus:border-4 transition-all focus:outline focus:border-yellow-300 text-black main-font  outline-none text-lg py-2 px-7 "
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="comments" className="text-3xl ">
                Comment{" "}
                <span className="text-black text-lg lowercase">(optional)</span>
              </label>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
                className="bg-white rounded-3xl focus:border-4 transition-all focus:outline focus:border-yellow-300 text-black main-font  outline-none text-lg py-2 px-7 "
                placeholder="..."
                value={form.comments}
                onChange={(e) =>
                  setForm({
                    ...form,
                    comments: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                className="bg-black text-white w-full py-2 main-font font-bold text-xl hover:scale-[1.05] transition-all"
                type="submit"
              >
                {loading ? (
                  <PiSpinnerBallThin size={24} className="animate-spin" />
                ) : (
                  "Play now"
                )}
              </button>
            </div>
            {errors.message && (
              <div className="bg-red-900 main-font text-white px-4 py-2 rounded-full text-center w-full  normal-case">
                {errors.message}
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default LookForGames;
