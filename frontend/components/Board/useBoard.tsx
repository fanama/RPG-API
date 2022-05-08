import { useEffect, useState } from "react";
import { Search } from "../../domain/filter";
import { Hero } from "../../domain/hero";
import {
  createInfraHero,
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

  const createHero = async (hero: Hero) => {
    for (const h of heroes) {
      if (h.name == hero.name || hero.name == "" || !hero.name) {
        return;
      }
    }

    if (!(await createInfraHero(hero))) {
      return;
    }

    setHeroes([...heroes, hero]);
  };

  return { heroesToDisplay, updateHero, filterHeroes, createHero };
}
