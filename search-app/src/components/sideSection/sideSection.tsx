import { useState } from "react";
import { IPerson } from "../../types/types";
import { SideSectionItem } from "./sideSectionItem";

export const SideSection = () => {
  const [personDetails] = useState<IPerson>({
    name: "",
    birth_year: "",
    eye_color: "",
    gender: "",
    hair_color: "",
    height: "",
    mass: "",
    skin_color: "",
    created: "",
    edited: "",
  });

  return <SideSectionItem personDetails={personDetails} />;
};
