"use client";

import React from "react";
import logo from "@/public/img/logo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t ">
        <div className="container justify-between mx-auto py-8 px-6 flex flex-col md:flex-row justify- items-center">
          <div className="flex items-center justify-between gap-3  md:items-start space-y-1  md:space-y-0 md:space-x-6">
            <Image
              width={85}
              height={85}
              src={logo.src}
              alt="Savremeni Srpski Centar za Znanje Logo"
             className="h-[50px] w-[50px] md:h-[62px] md:w-[62px] prevent-select"
            />
            <div className="text-center md:text-left">
              <h1 className="text-lg font-bold">
                Savremeni Srpski Centar za Znanje
              </h1>
              <p className="text-sm">Beograd, Srbija</p>
            </div>
          </div>
          <div className="flex">
            {/* Opciono: Možete dodati iframe mapu Univerziteta u Beogradu ili CSCZ lokacije */}
          </div>
        </div>
        <div className="bg-white border-t mt-4">
          <div className="text-[11px] md:text-sm container mx-auto p-5 flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p className="text-center">
              &copy; 2024 Savremeni Srpski Centar za Znanje, Beograd, Srbija. Sva prava zadržana.
            </p>
            <div>
              <p className="text-center">
                Zaprojektovao i razvio <a href="#"><u>CSCZ tim</u></a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
