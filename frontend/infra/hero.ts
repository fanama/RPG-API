import { Hero } from "../domain/hero";
export function getHero(): Hero {
  return {
    id: 2,
    name: "kaba",
    race: "sayan",
    lifepoint: 20,
    armor: 1,
    force: 12,
    vitesse: 15,
    constitution: 14,
    magie: 1,
    controle: 10,
    inteligence: 12,
    sagesse: 11,
    charisme: 10,
    owner: "master",
  };
}
