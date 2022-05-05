import { Card } from "../Card";
import style from "./style.module.scss";
import { useBoard } from "./useBoard";

interface Props {}

export function Board({}: Props) {
  const { heroes, updateHero } = useBoard();

  return (
    <div className={style.container}>
      <h2>Board</h2>
      {heroes.map((hero) => {
        return <Card hero={hero} updateHero={updateHero} />;
      })}
    </div>
  );
}
