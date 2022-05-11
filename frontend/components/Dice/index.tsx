import style from "./style.module.scss";
import { useDice } from "./useDice";

export function Dice() {
  const { diceValue, rollDice, dice, dices, chooseDice } = useDice();
  return (
    <>
      <div
        onClick={() => {
          rollDice();
        }}
        className={style.Dice}
      >
        <div>{diceValue}</div>
      </div>
      <select value={dice} onChange={chooseDice}>
        {dices.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </>
  );
}
