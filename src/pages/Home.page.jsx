import ScrollingRibbon from "../components/ScrollingRibbon";

import TwoGuys from "../assets/two-guys.jpeg";
import TwoGuysAgain from "../assets/two-guys-again.jpeg";
import BunchOfGuys from "../assets/bunch-of-guys.jpeg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className=" bg-[url('./assets/lg-bg.jpeg')]  bg-no-repeat  bg-center bg-cover bg-clip-border h-[80vh] border-b-[15px]  border-yellow-300">
        <div className="flex justify-between items-center px-10 py-4 h-full">
          <h1 className="uppercase accent-text-style text-[92px]  font-bold leading-tight bg-transparent">
            <p className="!text-yellow-300">Hoop</p> <p className="!text-white">Your Own</p>{" "}
            <span className="text-yellow-300">Way</span>
          </h1>
          <div>
            <Link
            to={"/search"}
            className="bg-yellow-300 text-black px-6 py-3 main-font font-bold text-2xl mr-20 mt-32 hover:scale-105 transition-all duration-200">
              Play now
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bg-black border-b-[15px]  border-yellow-300 py-3 space-y-3">
        <ScrollingRibbon />

        <div className="flex items-center justify-center gap-10 text-2xl main-font">
          <div>
            <span className="text-yellow-300 secondary-font">1-</span> Contact
            us
          </div>
          <div>
            <span className="text-yellow-300 secondary-font">2-</span>Specify
            your region
          </div>
          <div>
            <span className="text-yellow-300 secondary-font">3-</span>Alone or
            bringing teammates
          </div>
          <div>
            <span className="text-yellow-300 secondary-font">4-</span>Available
            date
          </div>
          <div>
            <span className="text-yellow-300 secondary-font">5-</span>Leave the
            rest to us
          </div>
        </div>
      </div>

      <section className="flex justify-between items-center bg-black">
        <div className="flex-1 text-center space-y-3">
          <div className="text-[92px] uppercase font-bold leading-tight text-yellow-300 accent-text-style ">
            Hoop <br /> Anywhere
          </div>
          <div className="text-3xl text-white max-w-sm w-full main-font mx-auto text-left">
            Enjoy pickup games from any city in t Tunisia, on any available
            court.
          </div>
        </div>
        <div className="flex-1 relative h-[800px]">
          <img src={TwoGuys} alt="" className="object-cover h-full w-full" />
        </div>
      </section>

      <section className="flex justify-between items-center bg-yellow-300">
        <div className="flex-1 relative h-[800px]">
          <img
            src={BunchOfGuys}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1 text-center space-y-3 ">
          <div className="text-[92px] uppercase bg-yellow-300 font-bold leading-tight text-white accent-text-style ">
            Hoop With
            <br /> Anyone
          </div>
          <div className="text-3xl max-w-sm w-full main-font mx-auto text-left text-black">
            Play basketball with friends, teammates, stranger, or anyone close
            by using our platform.
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center bg-black">
        <div className="flex-1 text-center space-y-3">
          <div className="text-[92px] uppercase font-bold leading-tight text-yellow-300 accent-text-style ">
            Hoop <br /> Any style
          </div>
          <div className="text-3xl text-white max-w-sm w-full main-font mx-auto text-left">
            Have fun playing casual pick-up games, join a practice session or
            compete to win a tournament.
          </div>
        </div>
        <div className="flex-1 relative h-[800px]">
          <img
            src={TwoGuysAgain}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
