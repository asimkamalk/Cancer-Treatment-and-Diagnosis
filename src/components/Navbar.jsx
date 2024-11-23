import React, { useCallback } from "react";
import { search } from "../assets";
import CustomButton from "./CustomButton";
import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { ready, authenticated, login, user, logout } = usePrivy();
  const handleLoginLogout = useCallback(() => {
    if (authenticated) {
      logout();
    } else {
      login().then(() => {
        if (user) {
          console.log(user);

          //fetch user
        }
      });
    }
  }, [authenticated, login, logout, user]);

  return (
    <div className="relative mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row">
      {/* Search Bar */}
      <div className="flex h-[56px] max-w-[458px] flex-row rounded-full bg-[#1c1c24] lg:flex-1">
        <input
          type="text"
          placeholder="Search for records"
          className="flex w-full rounded-full bg-transparent px-[16px] font-epilogue text-[16px] font-normal text-white outline-none placeholder:text-[#4b5264]"
        />

        {/* Search Button inside Search Bar */}
        <div className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-[#4acd8d]">
          <img
            src={search}
            alt="search"
            className="h-[24px] w-[24px] object-contain"
          />
        </div>
      </div>

      {/* Login/Logout Button (Top-right corner) */}
      <div className="absolute right-0 top-0">
        <CustomButton
          btnType={"button"}
          title={authenticated ? "Logout" : "Login"}
          styles={`${
            authenticated ? "bg-[#1dc071]" : "bg-[#8c6fcd]"
          } text-[16px] py-[12px] px-[24px] rounded-full font-semibold`}
          handleClick={handleLoginLogout}
        />
      </div>

      {/* Hidden Section for Flex-row (if needed for responsiveness) */}
      <div className="hidden flex-row justify-end gap-2 sm:flex"></div>
    </div>
  );
};

export default Navbar;
