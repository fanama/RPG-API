import { Hero } from "../domain/hero";
import { Search } from "../domain/filter";
import { heroes } from "./mock/hero";
import { getRepoHeroes, updateRepoHero } from "./repo/hero";

export function getHero(name: string): Hero {
  if (process.env.MODE == "mock") {
    return heroes?.filter((hero) => hero.name == name)[0];
  }
  return heroes[0];
}

export async function getInfraHeroes(setHeroes: (heroes: Hero[]) => void) {
  if (process.env.MODE == "mock") {
    setHeroes(heroes);
    return;
  }
  setHeroes(await getRepoHeroes());
}

export async function filterInfraHeroes({ name }: Search): Promise<Hero[]> {
  if (process.env.MODE == "mock") {
    if (name == "") {
      return heroes;
    }
    return heroes.filter((hero) => hero.name.includes(name));
  }

  const heroesToFilter = await getRepoHeroes();

  if (name == "") {
    return heroesToFilter;
  }

  return heroesToFilter.filter((hero) => hero.name.includes(name));
}

export async function updateInfraHero(
  name: string,
  hero: Hero
): Promise<boolean> {
  if (process.env.MODE == "mock") {
    for (const h of heroes) {
      if (h.name == name) {
        return true;
      }
    }
  }

  return await updateRepoHero(name, hero);
}

export async function createInfraHero(hero: Hero): Promise<boolean> {
  console.log({ hero });
  return true;
}
