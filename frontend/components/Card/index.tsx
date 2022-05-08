import { useState } from "react";
import { createContext } from "react";
import { Hero } from "../../domain/hero";
import { DisplayHero } from "./DisplayHero";
import { UpdateHero } from "./UpdateHero";

interface Props {
  hero: Hero;
  updateHero: (hero: Hero) => void;
}

interface CardContextType {
  hero: Hero;
  updateHero: (hero: Hero) => void;
  setModify: (modify: boolean) => void;
}

export const CardContext = createContext<CardContextType>(
  {} as CardContextType
);

export function Card({ hero, updateHero }: Props) {
  const [modify, setModify] = useState<boolean>(false);

  return (
    <CardContext.Provider value={{ setModify, hero, updateHero }}>
      {!modify ? <DisplayHero /> : <UpdateHero />}{" "}
    </CardContext.Provider>
  );
}
