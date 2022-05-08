import { useState } from "react";
import { Hero } from "../../domain/hero";

export function useCard(hero: Hero) {
  const [heroToUpdate, setHeroToUpdate] = useState<Hero>(hero);

  const change = (e: { target: HTMLInputElement }) => {
    const id = e.target.id;
    const value = e.target.value;

    setHeroToUpdate({ ...heroToUpdate, [id]: value });
  };

  return { heroToUpdate, change };
}
