import { useEffect, useState } from "react";
import { Hero } from "../../domain/hero";
import { getHeroes } from "../../infra/hero";

export function useBoard() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    setHeroes(getHeroes());
  }, []);

  const updateHero = (h: Hero) => {
    const heroesCopy = heroes.map((hero) => {
      if (hero.id == h.id) {
        hero = h;
      }

      return hero;
    });

    setHeroes(heroesCopy);
  };

  return { heroes, updateHero };
}
