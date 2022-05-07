import { useEffect, useState } from "react";
import { Search } from "../../domain/filter";
import { Hero } from "../../domain/hero";
import {
  filterInfraHeroes,
  getInfraHeroes,
  updateInfraHero,
} from "../../infra/hero";

export function useBoard() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [heroesToDisplay, setHeroesToDisplay] = useState<Hero[]>([]);

  useEffect(() => {
    getInfraHeroes(setHeroes);
  }, []);

  useEffect(() => {
    setHeroesToDisplay(heroes);
  }, [heroes]);

  const updateHero = async (h: Hero) => {
    if (!(await updateInfraHero(h.name, h))) {
      return;
    }

    const heroesCopy = heroes.map((hero) => {
      if (hero.id == h.id) {
        hero = h;
      }

      return hero;
    });

    setHeroes(heroesCopy);
  };

  const filterHeroes = async (search: Search) => {
    setHeroesToDisplay(await filterInfraHeroes(search));
  };

  return { heroesToDisplay, updateHero, filterHeroes };
}
