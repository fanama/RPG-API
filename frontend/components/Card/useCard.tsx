import { useState } from "react";
import { Hero } from "../../domain/hero";

export function useCard(hero: Hero) {
  const [heroCopy, setHeroCopy] = useState<Hero>(hero);

  const change = (e: { target: HTMLInputElement }) => {
    const id = e.target.id;
    const value = e.target.value;

    setHeroCopy({ ...heroCopy, [id]: value });
  };

  return { heroCopy, change };
}
