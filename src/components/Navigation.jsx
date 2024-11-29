import React from "react";

const Navigation = () => {
  return (
    <div
      style={{ width: "100vw" }}
      className="bg-slate-300 text-center content-center py-3"
    >
      <div
        className="gap-2 px-3 content-center"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <img
          src="./src/assets/icons/notification.png"
          alt="notification bell icon"
          width={30}
          height={30}
        />
        <img
          src="./src/assets/icons/user.png"
          alt="user icon"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};

export default Navigation;
