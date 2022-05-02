import { Hero } from "../domain/hero";
import { heroes } from "./mock/hero";

interface Search {
  name: string;
}

export function getHero(name: string): Hero {
  return heroes?.filter((hero) => hero.name == name)[0];
}

export function getHeroes(): Hero[] {
  return heroes;
}

export function filterHeroes({ name }: Search): Hero[] {
  return heroes.filter((hero) => hero.name.includes(name));
}
