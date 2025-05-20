import React from "react";

const Footer = () => {
  return (
    <section className="max-w-7xl h-5 mx-auto px-7 py-4">
      <div className="flex justify-between py-8  ">
        <p className="text-primary tracking-tight">
           Developed by{" "}
          <a href={"https://github.com/lhcee3"} className="font-bold text-[#85fd34]">
            Sai Aneesh
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;