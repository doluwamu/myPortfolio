import React, { useState, useEffect } from "react";

const ScrollUpBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      (
      <div
        id="scroll-up"
        onClick={scrollUp}
        class="scroll-up-arrow-wrapper cursor-pointer"
      >
        {/* <!-- <div class="scroll-up-arrow"> --> */}
        <i class="fa-solid fa-angle-up"></i>
        {/* <!-- </div> --> */}
      </div>
      )
    </>
  );
};

export default ScrollUpBtn;
