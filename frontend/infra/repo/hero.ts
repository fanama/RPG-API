import axios from "axios";
import { Hero } from "../../domain/hero";

export async function getRepoHeroes(): Promise<Hero[]> {
  const res = await axios.get("/server/heroes");

  return res.data as Hero[];
}

export async function updateRepoHero(
  name: string,
  hero: Hero
): Promise<boolean> {
  try {
    await axios.put(`/server/hero/${name}`, hero);

    return true;
  } catch (err) {
    return false;
  }
}
