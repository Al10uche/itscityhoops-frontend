import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const PageContainer = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("searching") === "true") {
      setShowToast(true);
    } 
  }, [localStorage.getItem("searching")]);

  return (
    <>
      <Header />
      <Outlet />
      {showToast && (
        <div className="fixed bottom-3 right-3 bg-yellow-300 shadow-lg p-3 text-black main-font animate-bounce">
          Looking for games...
        </div>
      )}
      <Footer />
    </>
  );
};

export default PageContainer;
