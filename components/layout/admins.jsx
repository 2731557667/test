import React from "react";
import Image from "next/image";

import Principal from "@/public/img/administrative/principal.png";
import Chancellor from "@/public/img/administrative/chancellor.jpg";
import ProChancellor from "@/public/img/administrative/pro_chancellor.jpg";
import ViceChancellor from "@/public/img/administrative/vice_chancellor.jpg";
import Registrar from "@/public/img/administrative/registrar.jpg";

const data = {
  administrationPanel: [
    {
      id: 2,
      src: Chancellor,
      name: "Prof. dr Branko Kovačević",
      position: "Rektor",
      org: "Univerzitet u Beogradu",
    },
    {
      id: 3,
      src: ProChancellor,
      name: "Prof. dr Petar Marić",
      position: "Prorektor",
      org: "Univerzitet u Beogradu",
    },
    {
      id: 4,
      src: ViceChancellor,
      name: "Prof. dr Milan Jovanović",
      position: "Dekan",
      org: "Savremeni Srpski Centar za Znanje",
    },
    {
      id: 5,
      src: Registrar,
      name: "Dr Marko Nikolić",
      position: "Sekretar",
      org: "Savremeni Srpski Centar za Znanje",
    },
    {
      id: 1,
      src: Principal,
      name: "Prof. dr Ana Petrović",
      position: "Direktor",
      org: "Savremeni Srpski Centar za Znanje",
    },
  ],
};

const AdministrationPanel = () => {
  return (
    <div className="pt-4 bg-white">
    </div>
  );
};

export default AdministrationPanel;
