import React from "react";

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 left-0 bg-opacity-80">
      <div className="max-w-7xl mx-auto px-7 flex flex-col justify-center items-center">
        <div className="flex justify-between py-4 w-full">
          <p className="text-primary tracking-tight text-center w-full">
            Developed by{" "}
            <a href="https://github.com/lhcee3" className="font-bold text-[#85fd34]">
              Sai Aneesh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;