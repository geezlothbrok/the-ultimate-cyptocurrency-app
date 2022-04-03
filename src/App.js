import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BiArrowToTop } from "react-icons/bi";

function App() {
  // Creating back to the top
  // The back-to-top button is hidden at the beginning

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="app">
      <Home />

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <BiArrowToTop className="arrow" />
        </button>
      )}
    </div>
  );
}

export default App;
