import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={handleScrollToTop} className="scroll-to-top-button">
          Scroll To Top
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;