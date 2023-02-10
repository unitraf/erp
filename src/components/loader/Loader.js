import React from "react";
import { BallTriangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BallTriangle
        color="#349eff"
        height={80}
        width={80}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
