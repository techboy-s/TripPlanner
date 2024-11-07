import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 bg-slate-50">
      <img src="/logo.png" alt="logo" />
      <div className="">
        <Button> Sign In</Button>
      </div>
    </div>
  );
};

export default Header;