import { useState } from "react";
import { Hero } from "../../domain/hero";
import { getHeroes } from "../../infra/hero";
import { Card } from "../Card";
import style from "./style.module.scss";

interface Props {}

export function Board({}: Props) {
  const [heroes, setHeroes] = useState<Hero[]>(getHeroes());

  return (
    <div className={style.container}>
      <h2>Board</h2>
      {heroes.map((hero) => {
        return <Card hero={hero} />;
      })}
    </div>
  );
}
