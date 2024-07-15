import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/global.context";

const PageContainer = () => {
  const [showToast, setShowToast] = useState(false);
  const [state, dispatch] = useContext(GlobalContext);
  
  console.log(state.isSearching);

  useEffect(() => {
    if(state.isSearching) {
      setShowToast(true);
    } 
  }, [state.isSearching]);

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
