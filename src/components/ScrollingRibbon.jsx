import React, { useRef, useState, useEffect } from "react";

const ScrollingRibbon = () => {
  const ribbonContainerRef = useRef(null);

  const [numberOfPhrases] = useState(100);

  const phrase = "How it works";

  const createRibbon = () => {
    const ribbon = document.createElement("div");
    ribbon.classList.add("ribbon");
    ribbon.classList.add("accent-text-style");
    ribbon.innerText = phrase;
    ribbon.style.animation = "marquee 3s linear infinite";

    const random = Math.floor(Math.random() * 100);

    if (random > 50) {
      ribbon.classList.remove("accent-text-style");
      ribbonContainerRef.current.appendChild(ribbon);
    }else{
      ribbonContainerRef.current.appendChild(ribbon);
    }

    if (ribbonContainerRef.current.childElementCount > 30) {
      ribbonContainerRef.current.removeChild(
        ribbonContainerRef.current.firstChild
      );
    }
  };

  useEffect(() => {
    for (let i = 0; i < numberOfPhrases; i++) {
      createRibbon();
    }
  }, []);

  return (
    <div
      ref={ribbonContainerRef}
      className="flex items-center  w-full whitespace-nowrap gap-2 max-w-screen overflow-hidden"
    ></div>
  );
};

export default ScrollingRibbon;
