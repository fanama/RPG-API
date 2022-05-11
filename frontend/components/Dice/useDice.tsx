import { useEffect, useState } from "react";
import { Hero } from "../../domain/hero";
import { getInfraDice } from "../../infra/dice";

export function useDice() {
  const [diceValue, setDiceValue] = useState<number>(0);
  const [dice, setDice] = useState<number>(20);
  const [dices, setDices] = useState<number[]>([]);
  const [action, setAction] = useState<string>("force");

  useEffect(() => {
    getInfraDice(setDices);
  }, []);

  const rollDice = (hero?: Hero) => {
    let key: keyof Hero;
    var mod: number = 0;
    for (key in hero) {
      if (action == key) {
        mod = (parseInt(`${(hero && hero[key]) || "0"}`) - 10) / 2;
      }
    }
    setDiceValue(Math.trunc(Math.random() * dice) + mod + 1);
  };

  const chooseDice = (e: { target: HTMLSelectElement }) => {
    setDice(parseInt(e.target.value));
  };

  return { diceValue, rollDice, chooseDice, dice, dices };
}
