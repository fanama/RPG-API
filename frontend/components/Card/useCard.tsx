import { useState } from "react";
import { Hero } from "../../domain/hero";

export function useCard(hero: Hero) {
  const [heroCopy, setHeroCopy] = useState<Hero>(hero);

  const change = (e: { target: HTMLInputElement }) => {
    const h = { ...heroCopy };

    if (e.target) {
      h[e.target.id] = e.target.value;
    }

    setHeroCopy(h);
  };

  return { heroCopy, change };
}
