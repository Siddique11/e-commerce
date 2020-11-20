import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherporps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}  ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherporps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
