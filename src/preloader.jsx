import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "./assets/preloader-animation.json";



const Preloader = ({ setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // The preloader will show for at least 2 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component is unmounted
  }, [setIsLoading]);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // added a high z-index
        "@media (max-width: 767.8px)": {
          alignItems: "flex-start",
          marginTop: "10vh"
        }
      }}
    >
      <Lottie
        options={defaultOptions}
        height="100%"
        width="100%"
        style={{
          "@media (max-width: 767.8px)": {
            height: "80%",
            width: "80%"
          }
        }}
      />
    </div>
  );
};

export default Preloader;
