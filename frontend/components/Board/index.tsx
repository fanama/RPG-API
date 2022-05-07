import { Card } from "../Card";
import style from "./style.module.scss";
import { useBoard } from "./useBoard";
import { useFilter } from "./useFilter";

interface Props {}

export function Board({}: Props) {
  const { heroesToDisplay, updateHero, filterHeroes } = useBoard();
  const { searchField, updateField } = useFilter();

  return (
    <div className={style.container}>
      <h2>
        Board
        <div>
          <input
            id="name"
            value={searchField.name}
            placeholder="name"
            onChange={updateField}
          />
          <button
            onClick={() => {
              filterHeroes(searchField);
            }}
          >
            filter
          </button>
        </div>
      </h2>

      {heroesToDisplay.map((hero) => {
        return <Card key={hero.id} hero={hero} updateHero={updateHero} />;
      })}
    </div>
  );
}
