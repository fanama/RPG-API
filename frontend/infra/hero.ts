import { Hero } from "../domain/hero";
import { heroes } from "./mock/hero";

interface Search {
  name: string;
}

export function getHero(name: string): Hero {
  if (process.env.MODE == "mock") {
    return heroes?.filter((hero) => hero.name == name)[0];
  }
  return heroes[0];
}

export function getHeroes(): Hero[] {
  return process.env.MODE == "mock" ? heroes : [];
}

export function filterHeroes({ name }: Search): Hero[] {
  if (process.env.MODE == "mock") {
    return heroes.filter((hero) => hero.name.includes(name));
  }

  return [];
}
