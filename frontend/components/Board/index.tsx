import { Card } from "../Card";
import { CreateHero } from "../Card/CreateHero";
import style from "./style.module.scss";
import { useBoard } from "./useBoard";
import { useFilter } from "./useFilter";

interface Props {}

export function Board({}: Props) {
  const { heroesToDisplay, updateHero, filterHeroes, createHero } = useBoard();
  const { searchField, updateField } = useFilter();

  return (
    <div className={style.display}>
      <CreateHero createHero={createHero} />
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
    </div>
  );
}
